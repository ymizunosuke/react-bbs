import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const NavBar = () => {
  return (
    <div>
      <AppBar position="absolute">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Example BBS
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
