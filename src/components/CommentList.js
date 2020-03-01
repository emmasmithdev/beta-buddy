import React from 'react';
import Comment from './Comment.js';

const CommentList = (props) => {

  const comments = props.comments.map((comment, index) => {
    return(
      <li key={index} className="comment-list-item">
        <Comment comment={comment} />
      </li>
    )
  })



  return (
    <ul className="comment-list">
      {comments.reverse()}
    </ul>

  )
}
export default CommentList;
