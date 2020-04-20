import React, { Component } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, Button, Box, DialogActions, Fab } from '@material-ui/core';
import { Field, reduxForm } from 'redux-form';
import { renderTextField } from './inputs/TextField';
import CreateIcon from '@material-ui/icons/Create';
import { withStyles } from '@material-ui/core/styles';

const style = (theme) => ({
  fab: {
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
  },
});

const CommentForm = (props) => {
  const { handleSubmit, onSubmitClick, openDialog, closeDialog, comments } = props;
  const [open, setOpen] = React.useState(false);
  const { classes } = props;
  console.log(comments);

  return (
    <div>
      <Fab
        color="primary"
        aria-label="add"
        className={classes.fab}
        onClick={() => {
          openDialog();
        }}
      >
        <CreateIcon />
      </Fab>
      <Button color="primary" onClick={openDialog}>
        aaa
      </Button>
      <Dialog open={comments.isDialogOpen} onClose={closeDialog}>
        <DialogTitle>投稿</DialogTitle>
        <DialogContent>
          <Field id="user" name="user" label="user" component={renderTextField} type="text" />
          <Field id="text" name="text" label="text" component={renderTextField} type="text" />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="danger" type="button" onClick={closeDialog}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

/*
class CommentForm extends Component {
  render() {
    const { handleSubmit, onSubmitClick } = this.props;
    const { open, setOpen } = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {};

    return (
      <Dialog onClose={handleClose}>
        <DialogTitle>投稿</DialogTitle>
        <DialogContent>
          onSubmit=
          {handleSubmit((values) => {
            onSubmitClick(values);
          })}
          >
          <Field id="user" name="user" label="user" component={renderTextField} type="text" />
          <Field id="text" name="text" label="text" component={renderTextField} type="text" />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
*/

/*
export default reduxForm({
  form: 'commentForm',
})(CommentForm);
*/

export default withStyles(style)(
  reduxForm({
    form: 'commentForm',
  })(CommentForm)
);
