import React from 'react'

const VideoCard = ({info}) => {
    // console.log(info);
    const {snippet, statistics} = info;
    const {channelTitle, title , thumbnails} = snippet;
  return (
    <div className='m-2 p-2 w-64 shadow-lg'>

        <img className='rounded-lg' alt="thumbnails" src={thumbnails.medium.url} />
        <ul>
            <li className='font-bold py-2'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul>
      
    </div>
  )
}


// Higher order components !!

export const AddVideoCard = ({info})=>{
  return (
    <div className='p-2 m-2 border border-red-200'>
    <VideoCard info = {info}/>
    </div>
  )

}

export default VideoCard
