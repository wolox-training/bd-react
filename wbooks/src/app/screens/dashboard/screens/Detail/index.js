import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { HOME } from '../../../../../constants/routes';
import bookActions from '../../../../../redux/bookAction/actions';

import BookDescription from './components/BookDescription';
import SuggestionList from './components/SuggestionList';
import CommentList from './components/CommentList';
import './styles.css';

class BookDetail extends React.Component {
  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.dispatch(bookActions.getBookDetail(id));
  }

  componentWillReceiveProps(nextProps) {
    const { id } = nextProps.match.params;
    if (id !== this.props.match.params.id) {
      this.props.dispatch(bookActions.getBookDetail(id));
    }
  }

  render() {
    if (!this.props.book) {
      return null;
    }

    return (
      <div className="detail">
        <BookDescription key={this.props.book.id} {...this.props.book} />
        <hr />
        <SuggestionList />
        <hr />
        <CommentList bookId={this.props.book.id} />
        <Link to={HOME}>
          <div className="nav-back">
            <span>&lt; Volver</span>
          </div>
        </Link>
      </div>
    );
  }
}

BookDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  })
};

const mapStateToProps = store => ({
  book: store.book.bookDetail
});

export default connect(mapStateToProps)(BookDetail);
