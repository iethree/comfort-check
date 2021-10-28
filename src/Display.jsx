import {useEffect, useState} from 'react';
import { getComfort } from './utils.js';

const levels = {
  5: 'bg-five',
  4: 'bg-four ',
  3: 'bg-three',
  2: 'bg-two',
  1: 'bg-one',
}

export default function Display({ id }) {
  const [levelData, setLevelData] = useState(null);
  let interval = null;
  useEffect(() => {
    getComfort(id).then(setLevelData);
    setInterval(() => {
      getComfort(id).then(setLevelData);
    }, 10 * 1000);
  }, []);

  return (
    <div className="text-gray-900 flex flex-wrap justify-center max-w-xl">
      {!levelData && loadingSpinner}
      {levelData?.map((l, i) => <Item key={i} value={l} /> )}
    </div>
  );
}

function Item({ value }) {
  return (
    <div
      className={`flex items-center justify-center text-4xl font-bold rounded-full m-2 h-16 w-16 ${levels[value]}`}
    >
      {value}
    </div>
  );
}

const loadingSpinner = <svg className="animate-spin -ml-1 mr-3 h-12 w-12 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
</svg>;