import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  

  /** 
   * searchCache will be like below -- 
   * 
   * searchCache = {
   *     "iphone" : ["iphone 11", "iphone 14"]
   * 
   * }
   */

  useEffect(()=>{
      // API CALL 
      // console.log(searchQuery);

      // make an api call after every key press 
      // but if the difference between 2 API call is < 200ms
      // decline the api call 

      // below part is logic of debouncing

      const timer = setTimeout(()=>{

        if(searchCache[searchQuery]){
          setSuggestions(searchCache[searchQuery]);
        }
        else{
          getSearchSuggestions();
        }
      }, 200);

      
      return ()=>{
         clearTimeout(timer);
      };

  }, [searchQuery]);

  /**
   * 
   * 
   * key - i
   * - render the component
   * - useEffect();
   * - start timer => make api call after 200ms
   * 
   * 
   * 
   * key - ip
   * - re-render the component
   * - useEffect();
   * - start timer => make api call after 200ms
   * 
   */

  const getSearchSuggestions = async ()=>{
    // console.log("Api call - " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();

    // console.log(json[1]);
    setSuggestions(json[1]);

    // update cache if that particular searchQuery is not present 

    dispatch(
      cacheResults({
      [searchQuery] : json[1],
    })
    );


  }
  

  const toggleMenuHandler = ()=>{

    dispatch(toggleMenu());

  }

  return (
    <div className='grid grid-flow-col p-1 m-2 shadow-lg'>
      <div className='flex col-span-1'>
        <img 
        onClick={()=>toggleMenuHandler()}
        className='h-12 cursor-pointer'
        alt="logo" 
        src="https://static.thenounproject.com/png/703781-200.png"  />

        <img 
        className='h-12'
        alt='Youtube' 
        src='https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg'/>
      </div>
      <div className='col-span-10'>
        <div>
        <input 
        className='px-4 w-1/2 py-1 border border-gray-500 rounded-l-full'
        type="text"
        value={searchQuery}
        onChange={(e) => {setSearchQuery(e.target.value); }}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setShowSuggestions(false)}

        />
        <button className='border border-gray-500 py-1 px-1 rounded-r-full bg-gray-100'
        >
          Search
        </button>
      </div>
      { showSuggestions && (<div className='fixed bg-white w-[29rem] px-3 py-2 shadow-lg rounded-lg border border-gray-100 '>
        <ul>
          { suggestions.map((s)=><li className='py-1 px-2 shadow-sm hover:bg-gray-100 ' 
          key={s}>{s}</li>)}  
        </ul>

      </div>)}

      </div>

      <div className='col-span-1'>
        <img 
        className='h-8'
        alt="user" 
        src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'
        />
      </div>
    </div>
  )
}

export default Head
