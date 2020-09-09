import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;

  return (
    <div className='posts-container-wrapper'>
    {
        posts.map(post => <Post key={post.id} post={post} likePost={likePost}/>)
    }
    </div>
  );
};

export default Posts;
{/* Map through the posts array returning a Post component at each iteration */}
{/* Check the implementation of Post to see what props it requires! */}

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