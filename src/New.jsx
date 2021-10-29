import { uuid } from './utils.js';

export default function New() {
  const id = uuid();
  return (
    <div className="text-center my-20">
      <a href={`?id=${id}`} className="bg-five text-gray-800 font-bold px-4 py-2 text-2xl rounded-lg">
        New Comfort Check
      </a>
    </div>
  );
}
