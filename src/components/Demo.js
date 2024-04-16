import React, { useMemo, useState } from 'react'
import { findPrime } from '../utils/helper';

const Demo = () => {
    const [text, setText] = useState(0);
    const [isDarkTheme, setIsDarkTheme] = useState(true);
    
    // heavy operation 
    // console.log("Rerendering... ")

    // const prime = findPrime(text);

    // on using useMemo hook 
    const prime = useMemo(()=> findPrime(text), [text]);

  return (
    <div 
    className={
     'p-2 m-4 border border-black w-96 h-96 ' +
    (isDarkTheme && ' bg-gray-900 text-white ') 
    }
     >
        <div>
            <button className='bg-green-200 p-1 m-10 rounded-lg'
            onClick={()=> setIsDarkTheme(!isDarkTheme)}
            >
                Toggle
            </button>
        </div>
      <div>
        <input 
        className='border border-black px-2 w-72' 
        type="number" 
        value={text}
        onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <h1 className='mt-4 font-bold'>nth Prime : {prime}</h1>
      </div>
    </div>
  )
}

export default Demo
