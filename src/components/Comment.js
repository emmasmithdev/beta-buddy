import React from 'react';

const Comment = (props) => {

  return (
    <p className="comment-body">{props.comment.body}</p>
  )
}
export default Comment;
