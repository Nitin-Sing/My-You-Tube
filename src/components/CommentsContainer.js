import React from 'react'


const commentData = [
  {
    name:"Nitin",
    text: "Namaste JavaScript course is fantastic and mind blowing",
    replies: [
      
    ]
  },
  {
    name:"Nitin",
    text: "Namaste JavaScript course is fantastic and mind blowing",
    replies: [
      {
        name:"Nitin",
        text: "Namaste JavaScript course is fantastic and mind blowing",
        replies: [
          {
            name:"Nitin",
            text: "Namaste JavaScript course is fantastic and mind blowing",
            replies: [
              {
                name:"Nitin",
                text: "Namaste JavaScript course is fantastic and mind blowing",
                replies: [
            
                ]
              },
        
            ]
          },
    
        ]
      },

    ]
  },
  {
    name:"Nitin",
    text: "Namaste JavaScript course is fantastic and mind blowing",
    replies: [
      {
        name:"Nitin",
        text: "Namaste JavaScript course is fantastic and mind blowing",
        replies: [
    
        ]
      },
    ]
  },
  {
    name:"Nitin",
    text: "Namaste JavaScript course is fantastic and mind blowing",
    replies: [

    ]
  },
]

const Comment = ({data})=>{
  // console.log(data);
  const {name, text, replies} = data;
  return (
    <div className='flex shadow-sm bg-gray-100 rounded-lg my-2'>
      <img 
        className='h-8'
        alt="user" 
        src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'
        />
      <div className='px-1'>
        <p className='font-bold'>{name}</p>
        <p>{text}</p>
        
      </div>
    </div>
  )

}

const CommentsList = ({comments})=>{
  // Desclaimer : Don't use indexes as keys
  return(
        comments.map((comment, index)=> 
        <div key={index}>
        <Comment data={comment}/>

        {/* below part is logic of nested comments using recursion */}
        <div className='pl-5 border border-l-black ml-3'>
          
          <CommentsList comments = {comment.replies}/>
        </div>

        </div>
        
        )
  )

};

const CommentsContainer = () => {
  return (
    <div className='p-2 m-3'>
      <h1 className='text-xl font-bold'>Comments:</h1>
      <CommentsList comments = {commentData}/>
      
      {/* <Comment data = {commentData[0]}/> */}
    </div>
  )
}

export default CommentsContainer
