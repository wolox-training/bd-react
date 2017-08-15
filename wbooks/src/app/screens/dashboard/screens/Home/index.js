import React from 'react';
import BookList from './components/BookList';
import SearchBar from './components/SearchBar';
import BookServices from '../../../../services/BookServices';
import './styles.css';



class Home extends React.Component {

  state = {
    searchValue: "",
    libros: BookServices.books
  }

  handleSubmit = (value) => {

    this.setState({searchValue: value});

    this.setState({ libros: BookServices.books.filter((book) => {
      return ( book.title.indexOf(this.state.searchValue) !== -1 || book.author.indexOf(this.state.searchValue) !== -1 )
    })});

  }

  render(){

    return(
      <div className='home'>
        <SearchBar onSubmit={this.handleSubmit} />
        <BookList books={this.state.libros} />
      </div>
    );
  }
}

export default Home;
