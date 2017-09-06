import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { HOME } from '../../../../../constants/routes';
import bookActions from '../../../../../redux/bookAction/actions';
import suggestionActions from '../../../../../redux/suggestionAction/actions';
import commentActions from '../../../../../redux/commentAction/actions';

import BookDescription from './components/BookDescription';
import SuggestionList from './components/SuggestionList';
import CommentList from './components/CommentList';
import './styles.css';

class BookDetail extends React.Component {
  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.dispatch(bookActions.getBookDetail(id));
    this.props.dispatch(bookActions.getRentStatus(id));
  }

  componentWillReceiveProps(nextProps) {
    const { id } = nextProps.match.params;
    if (id !== this.props.match.params.id) {
      this.props.dispatch(bookActions.getBookDetail(id));
      this.props.dispatch(suggestionActions.getSuggestionList());
      this.props.dispatch(commentActions.getComments(id));
    }
  }

  handleWishlist = (rentInfo, sameUser) => {
    if (rentInfo) {
      if (!sameUser) {
        this.props.dispatch(bookActions.postWishlist());
      }
    }
  };

  render() {
    if (!this.props.book) {
      return null;
    }

    return (
      <div className="detail">
        <BookDescription
          key={this.props.book.id}
          {...this.props.book}
          buttonProps={this.props.buttonProps}
          onClick={this.handleWishlist}
          rentInfo={this.props.rentInfo}
        />
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

const buttonProps = (rentStatus, sameUser) => {
  if (rentStatus) {
    if (sameUser) {
      return { text: 'Devolver', class: 'button-return' };
    }
    return { text: 'Wishlist', class: 'button-wishlist' };
  }
  return { text: 'Alquilar', class: 'button-rent' };
};

const rentStatus = rentInfo => {
  if (rentInfo) {
    return true;
  }
  return false;
};

const mapStateToProps = store => ({
  book: store.book.bookDetail,
  rentInfo: store.book.rentInfo,
  buttonProps: buttonProps(rentStatus(store.book.rentInfo), store.book.sameUser)
});

export default connect(mapStateToProps)(BookDetail);
