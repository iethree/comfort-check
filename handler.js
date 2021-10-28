const AWS = require('aws-sdk');

var config = {
  accessKeyId : process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_ACCESS_KEY_SECRET,
  region: 'us-east-2',
};
AWS.config.update(config);

const s3 = new AWS.S3();
const bucketName = 'comfort-checks';

async function post(event) {
  try {
    const { level, id } = event?.body?.id
      ? event.body
      : JSON.parse(event.body);

    if (!level || !id || id.length !== 36 || !level?.toString()?.match(/^[1-5]{1}$/)) {
      console.log('event', event);
      return { statusCode: 400, body: 'invalid input' };
    }

    const params = {
      Bucket: bucketName,
      Key:`data/${id}.json`,
    };

    const existingData = await s3.getObject(params).promise().catch(console.log);
    const levelList = existingData?.Body ? JSON.parse(existingData.Body) : [];

    levelList.push(level);
    params.Body = JSON.stringify(levelList);

    await s3.putObject(params).promise();

    return {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      statusCode: 200,
      body: JSON.stringify(levelList),
    };
  } catch (err) {
    console.error(err, event);
    return { statusCode: 500, body: err.toString() };
  }
}

module.exports = { post };
