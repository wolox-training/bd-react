import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { HOME } from '../../../../../constants/routes';

import BookDescription from './components/BookDescription';
import SuggestionList from './components/SuggestionList';
import CommentList from './components/CommentList';

const BookDetail = ({ book, suggestions }) =>
  book &&
  <div className="detail">
    <BookDescription key={book.id} {...book} />
    <hr />
    <SuggestionList suggestions={suggestions} />
    <hr />
    <CommentList />
    <Link to={HOME}>
      <div className="nav-back">
        <span>&lt; Volver</span>
      </div>
    </Link>
  </div>;

BookDetail.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired
  })
};

export default BookDetail;
