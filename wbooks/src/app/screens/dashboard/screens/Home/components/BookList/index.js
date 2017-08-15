import React from 'react';
import Book from './components/Book';
import './styles.css';

class BookList extends React.Component {
  render() {
    return (
      <div className="book-list">
        {this.props.books.map((book) =>
          <Book key={book.id} img={book.image_url} title={book.title} author={book.author} />)
        }
      </div>
    );
  }
}

export default BookList;
