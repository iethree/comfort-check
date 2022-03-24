const { Storage } = require('@google-cloud/storage');
const storage = new Storage();

const bucketName = 'comfort-checks';

async function post(req, res) {
  res.set('Access-Control-Allow-Origin', '*');

  try {
    if (req.method === 'OPTIONS') {
      // Send response to OPTIONS requests
      res.set('Access-Control-Allow-Methods', 'POST');
      res.set('Access-Control-Allow-Headers', 'Content-Type');
      res.set('Access-Control-Max-Age', '3600');
      res.status(204).send('');
      return;
    }

    if (req.method !== 'POST') {
      res.status(405).send('Method Not Allowed');
      return;
    }

    const { level, id } = req?.body?.id
      ? req.body
      : JSON.parse(req.body || []);

    if (!level || !id || id.length !== 36 || !level?.toString()?.match(/^[1-5]{1}$/)) {
      res.status(400).send('invalid input');
      return;
    }

    const existingData = await storage
      .bucket(bucketName)
      .file(`data/${id}.json`)
      .download()
      .catch(() => null);

    const levelList = existingData ? JSON.parse(existingData.toString()) : [];
    levelList.push(level);
    const newFile = JSON.stringify(levelList);

    await storage
      .bucket(bucketName)
      .file(`data/${id}.json`)
      .save(newFile);

    res
      .status(200)
      .send(levelList);
  } catch (err) {
    console.error(err, req.body);
    res.sendStatus(500);
  }
}

module.exports = { post };
