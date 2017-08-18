import React from 'react';

import './styles.css';
import userImgPng from '../../assets/user_img.png'

const CommentInput = () => {
  return (
    <div className="comment-input">
      <div className="comment-img">
        <img src={userImgPng} alt="user-img"/>
      </div>
      <div className="comment-form">
        <p>Agregar un comentario:</p>
        <form>
          <input type="textarea" />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default CommentInput;
