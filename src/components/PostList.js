import React from 'react';
import Post from '../containers/Post.js';

const PostList = (props) => {

  const posts = props.posts.map((post, index) => {
    return(
      <li key={index} className="post-list-item">
        <Post post={post} />
      </li>
    )
  })



  return (
    <ul className="post-list">
      {posts.reverse()}
    </ul>
  )
}
export default PostList;
