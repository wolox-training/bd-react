import React from 'react';
import './styles.css';
import searchSvg from './assets/search.svg'

class SearchBar extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault();
    const value = this.textInput.value;
    this.props.onSubmit(value);
  }

  render() {
    return(
      <div className="search-bar">
        <form onSubmit={this.handleSubmit}>
          <select>
          </select>
          <input type="text" placeholder="Buscar..." ref={(textInput) => (this.textInput = textInput)} />
          <button type="submit">
            <img src={searchSvg} alt="search"/>
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
