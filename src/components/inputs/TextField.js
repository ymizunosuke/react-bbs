import React from 'react';
import { TextField } from '@material-ui/core';

export const renderTextField = (props) => {
  const { input, classes, ...custom } = props;

  return <TextField {...input} {...custom} />;
};
