// React
import React from 'react';

// Material
import { Container } from '@material-ui/core';

// Components
import Footer from '../Footer';
import Header from '../Header';

// Styles
import { Toast, useStyles } from './Layout-styles';

export const Layout = (props) => {
  // Variables
  const classes = useStyles();

  // JSX
  const view = (
    <Container className={classes.root} maxWidth="md" disableGutters>
      <Header />
      <div className={classes.container}>{props.children}</div>
      <Footer />
      <Toast />
    </Container>
  );
  return view;
};

export default Layout;
