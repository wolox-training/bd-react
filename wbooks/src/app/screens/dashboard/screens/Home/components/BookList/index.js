import React from 'react';
import PropTypes from 'prop-types';

import Book from './components/Book';
import './styles.css';

const BookList = (props) => {
  return (
    <div className="book-list">
      {props.books.map((book) =>
        <Book key={book.id} img={book.image_url} title={book.title} author={book.author} />
      )}
    </div>
  );
}

BookList.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    image_url: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string
  })
}

export default BookList;
