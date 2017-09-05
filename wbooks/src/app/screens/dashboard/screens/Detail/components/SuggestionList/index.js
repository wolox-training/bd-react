import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { BOOK } from '../../../../../../../constants/routes';
import suggestionActions from '../../../../../../../redux/suggestionAction/actions';
import Book from '../../../Home/components/BookList/components/Book';
import './styles.css';

class SuggestionList extends React.Component {
  componentWillMount() {
    this.props.dispatch(suggestionActions.getSuggestionList());
  }
  render() {
    return (
      <div className="suggestion-list">
        <div className="suggestion-title">
          <h4>Suggestions</h4>
        </div>
        <div className="suggestion-books">
          {this.props.suggestions.map(book =>
            <Link key={book.id} to={`${BOOK}/${book.id}`}>
              <Book {...book} />
            </Link>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  suggestions: store.suggestion.suggestionList
});

export default connect(mapStateToProps)(SuggestionList);
