// React
import React from 'react';

// Redux
import { useSelector } from 'react-redux';

// Material
import { Divider, Drawer, Typography } from '@material-ui/core';

// Components
import General from './General';
import Info from './Info';
import Outreach from './Outreach';
import Settings from './Settings';

// Styles
import { useStyles } from './HeaderMenu-styles';

const HeaderMenu = (props) => {
  // Variables
  const classes = useStyles();
  const { open, onClose, isAuth } = props;
  const stats = useSelector((state) => state.stats.data.computed);

  //JSX
  const view = (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        anchor="left"
        open={open}
        onClose={onClose}
        ModalProps={{ keepMounted: true }}>
        <General onClose={onClose} />
        <Divider />
        <Settings onClose={onClose} isAuth={isAuth} />
        <Divider />
        <Info />
        <Divider />
        <Outreach onClose={onClose} isAuth={isAuth} />
        <div className={classes.drawerNote}>
          <Typography variant="caption">Updated to block {stats.count.block}</Typography>
        </div>
      </Drawer>
    </div>
  );

  return view;
};

export default HeaderMenu;
