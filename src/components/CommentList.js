import React, { Component } from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@material-ui/core';

class CommentList extends Component {
  render() {
    console.log(this.props);
    const { comments } = this.props.comments;

    return (
      <div>
        <Box component="span" m={1}>
          <Typography>Comment List</Typography>
        </Box>
        <Box component="span" m={1}>
          <List>
            {comments && comments.length
              ? comments.map((comment, index) => {
                  return (
                    <ListItem key={comment.id}>
                      <ListItemText>{comment.text}</ListItemText>
                    </ListItem>
                  );
                })
              : 'loading...'}
          </List>
        </Box>
      </div>
    );
  }
}

export default CommentList;
