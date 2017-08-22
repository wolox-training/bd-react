import React from 'react';

import Comment from './components/Comment';
import CommentInput from './components/CommentInput';
import './styles.css';

const CommentList = () => {
  const comment = {};
  return (
    <div className="comment-list">
      <div className="new-comment">
        <CommentInput />
      </div>
      <div className="comments">
        <Comment {...comment} />
        <Comment {...comment} />
        <Comment {...comment} />
      </div>
    </div>
  );
};

export default CommentList;
