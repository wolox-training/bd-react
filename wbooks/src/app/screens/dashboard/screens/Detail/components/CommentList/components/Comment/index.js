import React from 'react';

import './styles.css';
import userImgPng from '../../assets/user_img.png';

const Comment = (props ) => {
  return (
    <div className="comment">
      <div className="user-img">
        <img src={userImgPng} />
      </div>
      <div className="comment-body">
        <p className="comment-user">Comment.user.name</p>
        <p className="comment-date">Comment.date</p>
        <p className="comment-content">{props.content}</p>
      </div>
    </div>
  );
}

export default Comment;
