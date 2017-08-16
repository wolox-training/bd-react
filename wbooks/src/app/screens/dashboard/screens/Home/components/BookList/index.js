import React from 'react';
import PropTypes from 'prop-types';

import Book from './components/Book';
import './styles.css';

const BookList = ({ books }) => {
  return (
    <div className="book-list">
      {books.map((book) =>
        <Book key={book.id} {...book} />
      )}
    </div>
  );
}

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      image_url: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string
    })
  )
}

export default BookList;
