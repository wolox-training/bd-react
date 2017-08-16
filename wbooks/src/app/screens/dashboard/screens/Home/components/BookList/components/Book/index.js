import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Book = ({ image_url, title, author }) => {
  return (
    <div className="book">
      <img src={image_url} alt={title} />
      <span>{title}</span>
      <p>{author}</p>
    </div>
  );
}

Book.propTypes = {
  image_url: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}

export default Book;
