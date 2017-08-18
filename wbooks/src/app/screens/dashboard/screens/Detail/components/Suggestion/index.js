import React from 'react';

import Book from '../../../Home/components/BookList/components/Book';
import './styles.css';

const Suggestion = () => {
  return (
    <div className="suggestion">
      <div className="suggestion-title">
        <h4>Suggestions</h4>
      </div>
      <div className="suggestion-books">
        <Book />
        <Book />
        <Book />
        <Book />
      </div>
    </div>
  );
};

export default Suggestion;
