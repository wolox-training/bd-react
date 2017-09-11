import React from 'react';
import PropTypes from 'prop-types';
import * as moment from 'moment';

import './styles.css';
import userImgPng from '../../assets/user_img.png';

const Comment = ({ user, created_at, content }) => {
  return (
    <div className="comment">
      <div className="user-img">
        <img src={userImgPng} alt="profile-img" />
      </div>
      <div className="comment-body">
        <p className="comment-user">
          {user.first_name}
        </p>
        <p className="comment-date">
          {moment(created_at).format('LL')}
        </p>
        <p className="comment-content">
          {content}
        </p>
      </div>
    </div>
  );
};

Comment.defaultProps = {
  image_url: userImgPng
};

Comment.propTypes = {
  content: PropTypes.string.isRequired,
  user: PropTypes.shape({
    first_name: PropTypes.string.isRequired
  }),
  created_at: PropTypes.string.isRequired
};

export default Comment;
