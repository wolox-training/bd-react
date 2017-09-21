import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import bookActions from '../../../../../redux/bookAction/actions';
import suggestionActions from '../../../../../redux/suggestionAction/actions';
import commentActions from '../../../../../redux/commentAction/actions';

import BookDetail from './layout';
import './styles.css';

class BookDetailContainer extends React.Component {
  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.dispatch(bookActions.getBookDetail(id));
    this.props.dispatch(bookActions.getRentStatus(id));
    this.props.dispatch(suggestionActions.getSuggestionList());
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
    return <BookDetail book={this.props.book} rentInfo={this.props.rentInfo} buttonProps={this.props.buttonProps} handleWishlist={this.handleWishlist} suggestions={this.props.suggestions}/>;
  }
}

BookDetailContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }),
  book: PropTypes.shape({
    id: PropTypes.number.isRequired
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

const rentStatus = rentInfo => !!rentInfo;

const mapStateToProps = store => ({
  book: store.book.bookDetail,
  rentInfo: store.book.rentInfo,
  buttonProps: buttonProps(rentStatus(store.book.rentInfo), store.book.sameUser),
  suggestions: store.suggestion.suggestionList
});

export default connect(mapStateToProps)(BookDetailContainer);
