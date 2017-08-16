import React from 'react';

import BookServices from '../../../../services/BookServices';
import BookList from './components/BookList';
import SearchBar from './components/SearchBar';
import './styles.css';

class Home extends React.Component {
  state = {
    books: BookServices.books
  }

  shouldIncludeBook(book, field, filter) {
    return book[field].indexOf(filter) !== -1;
}

  handleSubmit = value => {
    this.setState({ books: BookServices.books.filter(book => this.shouldIncludeBook(book, 'title', value) ||
                                                              this.shouldIncludeBook(book, 'author', value)
    )});
  }

  render() {
    return (
      <div className="home">
        <SearchBar onSubmit={this.handleSubmit} />
        <BookList books={this.state.books} />
      </div>
    );
  }
}

export default Home;
