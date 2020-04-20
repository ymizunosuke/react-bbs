import { connect } from 'react-redux';
import CommentForm from '../components/CommentForm';
import { addComment, toggleDialog } from '../modules/comments';

const mapStateToProps = (state) => {
  return {
    comments: state.comments,
    isDialogOpen: state.isDialogOpen,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitClick(values) {
      dispatch(addComment(values));
    },
    openDialog() {
      console.log('dialog open');
      dispatch(toggleDialog(true));
    },
    closeDialog() {
      dispatch(toggleDialog(false));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
