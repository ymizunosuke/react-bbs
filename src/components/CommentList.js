import React, { Component } from 'react';
import { Grid, Box, List, ListItem, ListItemText, Typography, Divider, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const style = (theme) => ({
  comment_info: {
    color: 'gray',
    fontSize: 'small',
  },
});

class CommentList extends Component {
  render() {
    console.log(this.props);
    const { comments } = this.props.comments;
    const { classes } = this.props;

    return (
      <div>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h2" gutterbottom>
              BBS
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <Paper>
              <List component="nav">
                {comments && comments.length
                  ? comments.map((comment, index) => {
                      var divider = true;
                      if (index == comments.length - 1) {
                        divider = false;
                      }
                      console.log(divider);
                      return (
                        <ListItem divider={divider}>
                          <ListItemText
                            primary={
                              <div>
                                <Typography>{comment.text}</Typography>
                                <p className={classes.comment_info}>
                                  {comment.user} / {comment.date}
                                </p>
                              </div>
                            }
                          />
                        </ListItem>
                      );
                    })
                  : 'loading...'}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(style)(CommentList);
