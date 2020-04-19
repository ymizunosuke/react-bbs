import { connect } from 'react-redux';
import CommentForm from '../components/CommentForm';
import { addComment } from '../modules/comments';

const mapStateToProps = (state) => {
  return {
    comments: state.comments,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitClick(values) {
      dispatch(addComment(values));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
