import React from 'react';
import './styles.css';

class Book extends React.Component {
  render() {
    return (
      <div className="book">
        <img src={this.props.img} alt={this.props.title}/>
        <span>{this.props.title}</span>
        <p>{this.props.author}</p>
      </div>
    );
  }
}

export default Book;
