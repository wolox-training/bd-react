import React from 'react';
import PropTypes from 'prop-types';
import * as moment from 'moment';
import 'moment/locale/es';

import './styles.css';
import userImgPng from '../../assets/user_img.png';

const Comment = ({ user, created_at, content }) => {
  moment.locale('es');
  return (
    <div className="comment">
      <div className="user-img">
        <img src={userImgPng} />
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
  image_url: userImgPng,
  date: 'xx/xx/xx',
  content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
};

Comment.propTypes = {
  content: PropTypes.string.isRequired
};

export default Comment;
