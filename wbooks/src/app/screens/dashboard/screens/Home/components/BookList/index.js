import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { BOOK } from '../../../../../../../constants/routes';

import Book from './components/Book';
import './styles.css';

const BookList = ({ books }) => {
  return (
    <div className="book-list">
      {books.map(book =>
        <Link key={book.id} to={`${BOOK}/${book.id}`}>
          <Book {...book} />
        </Link>
      )}
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      image_url: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string
    })
  )
};

export default BookList;
