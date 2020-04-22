import React, { Component } from 'react';
import { Dialog, DialogTitle, DialogContent, Button, DialogActions, Fab, useMediaQuery } from '@material-ui/core';
import { Field, reduxForm } from 'redux-form';
import { renderTextField } from './inputs/TextField';
import { renderTextArea } from './inputs/TextArea';
import CreateIcon from '@material-ui/icons/Create';
import { withStyles, useTheme } from '@material-ui/core/styles';

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
  const [fullWidth, setFullWidth] = React.useState(true);
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
      <Dialog open={comments.isDialogOpen} onClose={closeDialog} fullWidth={fullWidth}>
        <form
          onSubmit={handleSubmit((values) => {
            onSubmitClick(values);
          })}
        >
          <DialogTitle>投稿</DialogTitle>
          <DialogContent>
            <Field id="user" name="user" label="user" component={renderTextField} type="text" fullWidth />
            <br />
            <Field
              id="text"
              name="text"
              label="text"
              component={renderTextField}
              multiline
              rows={10}
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button variant="contained" color="danger" type="button" onClick={closeDialog}>
              Cancel
            </Button>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default withStyles(style)(
  reduxForm({
    form: 'commentForm',
  })(CommentForm)
);
