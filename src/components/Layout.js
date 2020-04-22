import React, { Component } from 'react';
import { Grid, Paper, Fab } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
// containers
import CommentForm, { openDialog } from '../containers/CommentForm';
import CommentList from '../containers/CommentList';
import NavBar from './NavBar';

const style = (theme) => ({
  toolbar: theme.mixins.toolbar,
});

class Layout extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container justify="cnenter">
          <Grid item xs={12}>
            <NavBar />
          </Grid>
        </Grid>
        <div className={classes.toolbar}></div>
        <Grid container justify="center">
          <Grid item xs={6}>
            <CommentForm />
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item xs={6}>
            <CommentList />
          </Grid>
        </Grid>
        <Grid container justify="center" alignItems="flex-end">
          <Grid item xs={6}></Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(style)(Layout);
