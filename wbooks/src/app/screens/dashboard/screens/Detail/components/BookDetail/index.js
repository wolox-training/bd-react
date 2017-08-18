import React from 'react';

import './styles.css';

const BookDetail = ({ image_url, title, author, year, genre }) => {
  return (
    <div className="book-detail">
      <div className="detail-img">
        <img src={image_url} alt={title} />
      </div>
      <div className="detail-info">
        <span>{title}</span>
        <p>{author}</p>
        <p>{year}</p>
        <p>{genre}</p>
        <p className="book-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <button>Alquilar</button>
      </div>
    </div>
  );
}

export default BookDetail;
