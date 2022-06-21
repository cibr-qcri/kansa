// React
import { NavLink } from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';

// Material
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import {
  Input as LoginIcon,
  Home as MainIcon,
  LibraryBooks as TermsIcon,
} from '@material-ui/icons';

// Styles
import { useStyles } from './MenuGeneral-styles';

const MenuGeneral = (props) => {
  // Variables
  const classes = useStyles();
  const { onClose } = props;
  const isAuth = useSelector((state) => state.auth.data.token !== null);

  let loginItem = null;

  if (!isAuth) {
    loginItem = (
      <ListItem button component={NavLink} to="/signin" rel="noopener" onClick={onClose}>
        <ListItemIcon>
          <LoginIcon />
        </ListItemIcon>
        <ListItemText primary="Sign In" />
      </ListItem>
    );
  }

  const view = (
    <div className={classes.root}>
      <List className={classes.list}>
        <ListItem button component={NavLink} to="/" rel="noopener" onClick={onClose}>
          <ListItemIcon>
            <MainIcon />
          </ListItemIcon>
          <ListItemText primary="Main" />
        </ListItem>
        <ListItem button component={NavLink} to="/terms" rel="noopener" onClick={onClose}>
          <ListItemIcon>
            <TermsIcon />
          </ListItemIcon>
          <ListItemText primary="Terms" />
        </ListItem>
        {loginItem}
      </List>
    </div>
  );

  return view;
};

export default MenuGeneral;
