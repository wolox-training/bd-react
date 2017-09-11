import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { HOME } from '../../../../../constants/routes';

import BookDescription from './components/BookDescription';
import SuggestionList from './components/SuggestionList';
import CommentList from './components/CommentList';

const BookDetail = ({ book, buttonProps, rentInfo, handleWishlist }) =>
  book &&
  <div className="detail">
    <BookDescription
      key={book.id}
      {...book}
      buttonProps={buttonProps}
      onClick={handleWishlist}
      rentInfo={rentInfo}
    />
    <hr />
    <SuggestionList />
    <hr />
    <CommentList bookId={book.id} />
    <Link to={HOME}>
      <div className="nav-back">
        <span>&lt; Volver</span>
      </div>
    </Link>
  </div>;

BookDetail.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired
  }),
  buttonProps: PropTypes.shape({
    text: PropTypes.string.required,
    class: PropTypes.string.required
  }),
  rentInfo: PropTypes.object
};

export default BookDetail;
