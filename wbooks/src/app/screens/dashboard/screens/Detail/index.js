import React from 'react';
import { Link } from 'react-router-dom';

import BookService from '../../../../services/BookServices';
import { HOME } from '../../../../../constants/routes';

import BookDescription from './components/BookDetail';
import SuggestionList from './components/SuggestionList';
import CommentList from './components/CommentList';
import './styles.css';

class BookDetail extends React.Component {
  state = { book: null };

  componentWillMount() {
    const { id } = this.props.match.params;
    if (!id) {
      // TODO: Handle this border case
    }
    this.setState({ book: BookService.books.filter(book => `${book.id}` === id)[0] });
  }

  render() {
    return (
      <div className="detail">
        <BookDescription key={this.state.book.id} {...this.state.book} />
        <hr />
        <SuggestionList />
        <hr />
        <CommentList />
        <Link to={HOME}>
          <div className="nav-back">
            <span>&lt; Volver</span>
          </div>
        </Link>
      </div>
    );
  }
}

export default BookDetail;
