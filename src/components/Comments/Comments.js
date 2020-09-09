import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;

  console.log(comments)

  return (<div>{comments.map(comment =>{return <Comment key={comment.id} comment={comment}/>})}</div>)
}

export default Comments;
{/* map through the comments prop and render a Comment for every piece of data */}

// export default function FriendsList(props) {
//   // WITH DESTRUCTURING
//   const { friendsList, ladyGaga, foo } = props

//   return (
//     <div className='list-friends container'>
  
//       {
//         friendsList.map(friendObject => {
//           return <Friend key= {friendObject.id} friend ={friendObject}/>
//         })
//       }

//       {/* Each friend is going to need a `key` prop and also some other prop with data */}
//     </div>
//   )
// }