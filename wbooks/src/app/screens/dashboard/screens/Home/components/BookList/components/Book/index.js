import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Book = props => {
  return (
    <div className="book">
      <img src={props.img} alt={props.title} />
      <span>{props.title}</span>
      <p>{props.author}</p>
    </div>
  );
}

Book.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}

export default Book;
