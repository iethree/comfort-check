import { useState } from 'react';
import Legend from './Legend';
import Picker from './Picker';
import Display from './Display';
import New from './New';
import Share from './Share';
import { getId, getPicked, uuid } from './utils.js';


export default function App(){
  const id = getId();
  const [ picked, setPicked ] = useState(getPicked(id));
  return (
    <div className="flex justify-center">
      <div id="main" className="p-5 lg:p-10 ">
        <h1 className="text-center mb-5">Comfort Check</h1>
        {!id && <New />}
        {id && (
          <>
            <Share />
            {!picked && <Picker setPicked={setPicked} />}
            {picked && <Display id={id} />}
            <Legend />
          </>
        )}
        <Links id={id} />
      </div>
    </div>
  );
};


function Links({ id }) {
  return (
    <div className="text-gray-400 mt-20 flex justify-center flex-wrap">
      <a
        href="https://www.funretrospectives.com/the-retrospective-prime-directive/"
        className="mx-5 block"
        target="_blank"
      >
        the prime directive
      </a>
      <a
        href="https://www.funretrospectives.com/safety-check/"
        className="mx-5 block"
        target="_blank"
      >
        how to check comfort
      </a>
      {id && <a href={`?id=${uuid()}`} className="mx-5 block">new comfort check</a>}
    </div>
  );
}