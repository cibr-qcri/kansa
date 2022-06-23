// React
import React from 'react';

// Redux
import { useSelector } from 'react-redux';

// Material
import { Typography } from '@material-ui/core';

// Components
import Actions from './Actions';
import Form from './Form';

// Styles
import { useStyles } from './Account-styles';

export const Account = () => {
  //Variables
  const classes = useStyles();
  const userData = useSelector((state) => state.user.data);

  //JSX
  const view = (
    <div className={classes.root}>
      <Typography className={classes.typography}>Manage your account</Typography>
      <Form
        firstName={userData.firstName}
        lastName={userData.lastName}
        organization={userData.organization}
      />
      <Actions />
    </div>
  );

  return view;
};

export default Account;
