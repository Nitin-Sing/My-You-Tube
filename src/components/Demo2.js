import React, { useEffect, useRef, useState } from 'react'

const Demo2 = () => {

  let x = 0;
   
  // when i will use const x then it will give error on toggling the increase button 
//   const x = 10;

const [Y, setY] = useState(0);

const ref = useRef(0);

/**
 * not like => ref = 0;
 * ref = {current: 0};
 */

console.log("Rendering...");

const i = useRef(null);
useEffect(()=>{

    i.current = setInterval(()=>{
        //   console.log("Namaste React " + Math.random());
    }, 1000)
    
    return ()=> clearInterval(i.current);

}, []);


  return (
    <div className='w-96 h-96 border border-black m-4 p-2'>
     <div>
     <button className='m-4 p-1 bg-green-200 rounded-lg'
     onClick={()=>{ 
        x = x+1;
        console.log("x="+x);
    }}
     >
        Increase x
     </button>
     <span className='font-bold'> Let = {x}</span>
     </div>

     <div>
     <button className='m-4 p-1 bg-green-200 rounded-lg'
     onClick={()=>{ 
        setY(Y+1);
    }}
     >
        Increase Y
     </button>
     <span className='font-bold'> state = {Y}</span>
     </div>
      
     <div>
     <button className='m-4 p-1 bg-green-200 rounded-lg'
     onClick={()=>{ 
        ref.current = ref.current +1;
        console.log("ref = " + ref.current );
    }}
     >
        Increase ref
     </button>
     <span className='font-bold'> Ref = {ref.current}</span>
     </div>
     
     <button className='bg-red-900 p-2 m-4 font-bold text-white rounded-lg'
     onClick={()=>{
        clearInterval(i.current);
     }}
     >
        Stop Printing
        </button>

    </div>

    
  )
}

export default Demo2
