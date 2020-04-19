import React, { Component } from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

class CommentList extends Component {
  render() {
    console.log(this.props);
    const { comments } = this.props.comments;

    return (
      <div>
        <p>comment list</p>
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
      </div>
    );
  }
}

export default CommentList;
