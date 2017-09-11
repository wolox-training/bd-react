import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import commentActions from '../../../../../../../../../redux/commentAction/actions';
import './styles.css';
import userImgPng from '../../assets/user_img.png';

class CommentInput extends React.Component {
  state = {
    content: ''
  };

  handleTextChange = event => {
    this.setState({ content: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch(commentActions.postComment(this.state.content));
  };

  render() {
    return (
      <div className="comment-input">
        <div className="comment-img">
          <img src={userImgPng} alt="user-img" />
        </div>
        <div className="comment-form">
          <p>Agregar un comentario:</p>
          <form onSubmit={this.handleSubmit}>
            <input
              type="textarea"
              value={this.state.value}
              onChange={this.handleTextChange}
              placeholder="Escribi tu comentario..."
              required
            />
            {!this.props.commentLoading ? <button type="submit">Enviar</button> : null}
          </form>
        </div>
      </div>
    );
  }
}

CommentInput.propTypes = {
  commentLoading: PropTypes.bool
};

const mapStateToProps = store => ({
  commentLoading: store.comment.commentLoading
});

export default connect(mapStateToProps)(CommentInput);
