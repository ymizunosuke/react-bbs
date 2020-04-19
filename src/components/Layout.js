import React, { Component } from 'react';
import { Grid, Paper, makeStyles } from '@material-ui/core';
// containers
import CommentForm from '../containers/CommentForm';
import CommentList from '../containers/CommentList';
import NavBar from './NavBar';

/*
const style = (theme) => ({
  Layout: theme.mixins.toolbar,
});
*/

class Layout extends Component {
  render() {
    return (
      <div>
        <Grid container justify="cnenter">
          <Grid item xs={12}>
            <NavBar />
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item xs={6}>
            <CommentForm />
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item xs={6}>
            <Paper>
              <CommentList />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Layout;
