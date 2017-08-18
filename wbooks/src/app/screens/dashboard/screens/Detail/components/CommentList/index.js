import React from 'react';

import Comment from './components/Comment';
import CommentInput from './components/CommentInput';
import './styles.css';

const CommentList = () => {
  return (
    <div className="comment-list">
      <div className="new-comment">
        <CommentInput />
      </div>
      <div className="comments">
        <Comment content={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."} />
        <Comment content={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."} />
        <Comment content={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."} />
      </div>
    </div>
  )
}

export default CommentList;
