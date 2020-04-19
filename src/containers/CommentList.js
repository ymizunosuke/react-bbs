import { connect } from 'react-redux';
import CommentList from '../components/CommentList';

const mapStateToProps = (state) => {
  return { comments: state.comments };
};

const LoadCommentList = connect(mapStateToProps)(CommentList);

export default LoadCommentList;
