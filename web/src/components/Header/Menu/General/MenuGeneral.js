import React from 'react';

import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';

import {
  Home as MainIcon,
  Input as LoginIcon,
  LibraryBooks as TermsIcon,
} from '@mui/icons-material';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

const MenuGeneral = (props) => {
  const { onClose } = props;
  const isAuth = useSelector((state) => state.auth.token !== null);

  let loginItem = null;

  if (!isAuth) {
    loginItem = (
      <ListItem
        button
        component={NavLink}
        to="/signin"
        rel="noopener"
        onClick={onClose}
      >
        <ListItemIcon>
          <LoginIcon />
        </ListItemIcon>
        <ListItemText primary="Sign In" />
      </ListItem>
    );
  }

  const view = (
    <div>
      <List>
        <ListItem
          button
          component={NavLink}
          to="/"
          rel="noopener"
          onClick={onClose}
        >
          <ListItemIcon>
            <MainIcon />
          </ListItemIcon>
          <ListItemText primary="Main" />
        </ListItem>
        <ListItem
          button
          component={NavLink}
          to="/terms"
          rel="noopener"
          onClick={onClose}
        >
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
