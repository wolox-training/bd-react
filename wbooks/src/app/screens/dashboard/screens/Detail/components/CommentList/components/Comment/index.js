import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import userImgPng from '../../assets/user_img.png';

const Comment = ({ user, image_url, date, content }) => {
  return (
    <div className="comment">
      <div className="user-img">
        <img src={image_url} alt={user}/>
      </div>
      <div className="comment-body">
        <p className="comment-user">
          {user}
        </p>
        <p className="comment-date">
          {date}
        </p>
        <p className="comment-content">
          {content}
        </p>
      </div>
    </div>
  );
};

Comment.defaultProps = {
  user: 'Kimberly Carter',
  image_url: userImgPng,
  date: 'xx/xx/xx',
  content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
};

Comment.propTypes = {
  image_url: PropTypes.string,
  user: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default Comment;
