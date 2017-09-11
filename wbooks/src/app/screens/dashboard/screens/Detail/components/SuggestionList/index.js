import React from 'react';
import { Link } from 'react-router-dom';

import { BOOK } from '../../../../../../../constants/routes';
import Book from '../../../Home/components/BookList/components/Book';
import './styles.css';

const SuggestionList = ({ suggestions }) =>
  <div className="suggestion-list">
    <div className="suggestion-title">
      <h4>Suggestions</h4>
    </div>
    <div className="suggestion-books">
      {suggestions.map(book =>
        <Link key={book.id} to={`${BOOK}/${book.id}`}>
          <Book {...book} />
        </Link>
      )}
    </div>
  </div>;

export default SuggestionList;
