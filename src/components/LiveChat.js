import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';

const LiveChat = () => {
    
    const [LiveMessage, setLiveMessage] = useState("");

    const dispatch =  useDispatch();

    const chatMessages = useSelector((store)=> store.chat.messages);

    useEffect(()=>{
        const timer = setInterval(()=>{
           // APi Polling
          //  console.log("APi Polling");
           dispatch(
            addMessage({
            name: generateRandomName(),
            message: makeRandomMessage(20)
           }))

        }, 2000)

        return ()=> clearInterval(timer);

    }, []);

  return (
    <>
    <div className='w-full h-[385px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll  flex flex-col-reverse'>
       {
        // Don't use index as key
        chatMessages.map((c, index)=>{
           return (<ChatMessage key={"abc"+index} name = {c.name} message={c.message} />)

        })}
    </div>
    <form 
        className='w-full border border-black p-2 ml-2 rounded-lg'
        onSubmit={(e)=>{
        e.preventDefault()
        // console.log("On Form Submit " + LiveMessage)
        dispatch(
          addMessage({
            name: "Nitin",
            message: LiveMessage,
          })
        )
        setLiveMessage("")
        }}
        >
        <input 
          className=' px-2 w-[450px]' type="text" value={LiveMessage} 
          onChange={(e) => 
          setLiveMessage(e.target.value)}/>
        <button className='px-2 mx-3 bg-green-100 rounded-lg'>Send</button>
    </form>
    </>
  )
}

export default LiveChat
