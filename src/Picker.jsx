import { useState } from 'react';
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
        {loading && loadingSpinner}
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


const loadingSpinner = <svg className="animate-spin -ml-1 mr-3 h-12 w-12 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
</svg>;