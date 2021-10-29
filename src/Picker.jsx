import { useState } from 'react';
import { LoadingSpinner } from './Icons';
import { setComfort } from './utils.js';

const buttons = [
  { value: 5, color: 'text-five border-five' },
  { value: 4, color: 'text-four border-four' },
  { value: 3, color: 'text-three border-three' },
  { value: 2, color: 'text-two border-two' },
  { value: 1, color: 'text-one border-one' },
];

export default function Picker({ setPicked }) {
  const [loading, setLoading] = useState(false);

  return (
    <div className="my-5">
      <p className="text-2xl mb-10 text-center">My current comfort level is: </p>
      <div className="flex flex-wrap justify-around">
        {!loading && buttons.map((b) =>
          <LevelButton
            {...b}
            key={b.value}
            onClick={() => {
              setLoading(true);
              setComfort(b.value).then(() => setPicked(true))
            }}
          />
        )}
        {loading && <LoadingSpinner />}
      </div>
    </div>
  );
}

function LevelButton({ value, color, onClick }) {
  return (
    <button
      className={`text-4xl font-bold border-2 rounded-full m-1 px-4 py-1 ${color} opacity-70 hover:opacity-100`}
      onClick={onClick}
    >
      <span>{value}</span>
    </button>
  );
}