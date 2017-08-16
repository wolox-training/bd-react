import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import searchSvg from './assets/search.svg'

class SearchBar extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    const value = this.textInput.value;
    this.props.onSubmit(value);
  }

  setRef = (textInput) => (this.textInput = textInput);

  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.handleSubmit}>
          <select />
          <input type="text" placeholder="Buscar..." ref={this.setRef} />
          <button type="submit">
            <img src={searchSvg} alt="search" />
          </button>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  value: PropTypes.string
}

export default SearchBar;
