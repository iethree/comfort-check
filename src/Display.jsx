import { useEffect, useState } from 'react';
import { SadFace, LoadingSpinner } from './Icons';
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
  const [error, setError] = useState(false);

  const fetchComfort = () => getComfort(id)
    .then(setLevelData)
    .catch(() => setError(true));

  useEffect(fetchComfort, []);

  useEffect(() => {
    // don't keep refreshing if we failed before
    if (error) return;

    const timeout = setTimeout(fetchComfort, 10 * 1000);
    return () => clearTimeout(timeout);
  }, [levelData]);

  return (
    <>
      {error && (
        <div className="text-center text-xl my-10 text-gray-400">
          <SadFace />
          Something went wrong
        </div>
      )}
      <div className="text-gray-900 flex flex-wrap justify-center max-w-xl">
        {!levelData && !error && <LoadingSpinner />}
        {levelData?.map((l, i) => <Item key={i} value={l} /> )}
      </div>
      {levelData && !error && (
        <div className="flex justify-center items-center mt-5 text-gray-500">
          <LoadingSpinner size="xs" speed="slow" /> updating
        </div>
      )}
    </>
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
