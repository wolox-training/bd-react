import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const BookDescription = ({ image_url, title, author, year, genre, buttonProps, handleWishlist }) => {
  return (
    <div className="book-detail">
      <div className="detail-img">
        <img src={image_url} alt={title} />
      </div>
      <div className="detail-info">
        <span>
          {title}
        </span>
        <p>
          {author}
        </p>
        <p>
          {year}
        </p>
        <p>
          {genre}
        </p>
        <button className={buttonProps.class} onClick={handleWishlist}>
          {buttonProps.text}
        </button>
      </div>
    </div>
  );
};

BookDescription.propTypes = {
  image_url: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  year: PropTypes.string,
  genre: PropTypes.string
};

export default BookDescription;
