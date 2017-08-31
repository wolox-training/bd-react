import React from 'react';
import { connect } from 'react-redux';

import bookActions from '../../../../../redux/bookAction/actions';

import BookList from './components/BookList';
import SearchBar from './components/SearchBar';
import './styles.css';

class Home extends React.Component {
  componentWillMount() {
    this.props.dispatch(bookActions.getBooks());
  }

  handleSubmit = value => this.props.dispatch(bookActions.bookFilter(value));

  render() {
    return (
      <div className="home">
        <SearchBar onSubmit={this.handleSubmit} />
        <BookList books={this.props.books} />
      </div>
    );
  }
}

const mapStateToProps = store => ({
  books: store.book.filteredList
});

export default connect(mapStateToProps)(Home);
