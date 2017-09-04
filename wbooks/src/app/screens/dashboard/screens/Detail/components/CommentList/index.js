import React from 'react';
import { connect } from 'react-redux';

import commentActions from '../../../../../../../redux/commentAction/actions';

import Comment from './components/Comment';
import CommentInput from './components/CommentInput';
import './styles.css';

class CommentList extends React.Component {
  componentWillMount() {
    this.props.dispatch(commentActions.getComments(this.props.bookId));
  }
  render() {
    return (
      <div className="comment-list">
        <div className="new-comment">
          <CommentInput />
        </div>
        <div className="comments">
          {this.props.comments.map(comment => <Comment key={comment.id} {...comment} />)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  comments: store.comment.commentList
});

export default connect(mapStateToProps)(CommentList);
