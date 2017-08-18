import React from 'react';
import { Link } from 'react-router-dom';

import BookService from '../../../../services/BookServices';

import BookDetail from './components/BookDetail';
import Suggestion from './components/Suggestion';
import CommentList from './components/CommentList';
import './styles.css';

class Detail extends React.Component {
  state = { book: null };

  componentWillMount() {
    const { id } = this.props.match.params;
    if (!id) {
      // TODO: Handle this border case
    }
    this.setState({ book: BookService.books.filter(book => '' + book.id === id)[0] });
  }

  render() {
    return (
      <div className="detail">
        <BookDetail key={this.state.book.id} {...this.state.book} />
        <hr />
        <Suggestion />
        <hr />
        <CommentList />
        <Link to="/">
          <div className="nav-back">
            <span>Volver</span>
          </div>
        </Link>
      </div>
    );
  }
}

export default Detail;
