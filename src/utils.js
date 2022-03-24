const lambdaAddress = 'https://us-central1-infopanel-bots.cloudfunctions.net/comfortCheck';
const bucketAddress = 'https://storage.googleapis.com/comfort-checks';

export function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
     const r = (Math.random() * 16) | 0;
     const v = c === 'x' ? r : (r & 0x3) | 0x8;
     return v.toString(16);
  });
}

export function setComfort(level) {
  const id = getId();
  return fetch(lambdaAddress, {
     method: 'POST',
     headers: { "Content-Type": "application/json"},
     body: JSON.stringify({ id, level })
  }).then(() => setPicked(id));
}

export function getComfort(id){
  return fetch(`${bucketAddress}/data/${id}.json?time=${Date.now()}`)
    .then(r=>r.json())
    .then(data => data.sort((a, b) => b - a));
}

export function getId() {
  return new URLSearchParams(window.location.search).get('id') || null;
}

export function getPicked(id) {
  const savedComfort = localStorage.getItem('comfortCheck');
  return id == savedComfort;
}

export function setPicked(id) {
  localStorage.setItem('comfortCheck', id);
}
