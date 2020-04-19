import React, { Component } from 'react';
import { TextField, Button, Box } from '@material-ui/core';
import { Field, reduxForm } from 'redux-form';
import { renderTextField } from './inputs/TextField';

class CommentForm extends Component {
  render() {
    const { handleSubmit, onSubmitClick } = this.props;

    return (
      <Box>
        <form
          onSubmit={handleSubmit((values) => {
            onSubmitClick(values);
          })}
        >
          <Field id="user" name="user" label="user" component={renderTextField} type="text" />
          <Field id="text" name="text" label="text" component={renderTextField} type="text" />
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </form>
      </Box>
    );
  }
}

export default reduxForm({
  form: 'commentForm',
})(CommentForm);
