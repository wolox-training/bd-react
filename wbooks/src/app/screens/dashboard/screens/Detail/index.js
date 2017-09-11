import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import bookActions from '../../../../../redux/bookAction/actions';
import suggestionActions from '../../../../../redux/suggestionAction/actions';

import BookDetail from './layout';
import './styles.css';

class BookDetailContainer extends React.Component {
  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.dispatch(bookActions.getBookDetail(id));
    this.props.dispatch(suggestionActions.getSuggestionList());
  }

  componentWillReceiveProps(nextProps) {
    const { id } = nextProps.match.params;
    if (id !== this.props.match.params.id) {
      this.props.dispatch(bookActions.getBookDetail(id));
    }
  }

  render() {
    return <BookDetail book={this.props.book} suggestions={this.props.suggestions} />;
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

const mapStateToProps = store => ({
  book: store.book.bookDetail,
  suggestions: store.suggestion.suggestionList
});

export default connect(mapStateToProps)(BookDetailContainer);
