import { connect } from 'react-redux';
import CommentForm from '../components/CommentForm';
import { addComment, toggleDialog } from '../modules/comments';
import moment from 'moment';

const mapStateToProps = (state) => {
  return {
    comments: state.comments,
    isDialogOpen: state.isDialogOpen,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitClick(values) {
      values.date = moment().format('YYYY-MM-DD HH:mm:ss');
      dispatch(addComment(values));
      dispatch(toggleDialog(false));
    },
    openDialog() {
      dispatch(toggleDialog(true));
    },
    closeDialog() {
      dispatch(toggleDialog(false));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
