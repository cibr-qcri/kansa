// React
import React from 'react';

// Material
import { ContactMail as ContactUsIcon, Twitter as TwitterIcon } from '@material-ui/icons';
import { List, ListItem, ListItemIcon, ListItemText, ListSubheader } from '@material-ui/core';

// Styles
import { useStyles } from './MenuOutreach-styles';

const MenuOutreach = (props) => {
  // Variables
  const classes = useStyles();
  const { onClose } = props;
  const twitterLink = 'https://twitter.com/QatarComputing';
  const contactLink = 'mailto:contact@mail.cibr.qcri.org?subject=Hello!';

  //JSX
  const header = <ListSubheader className={classes.header}>Keep in Touch</ListSubheader>;

  const view = (
    <div className={classes.root}>
      <List className={classes.list} subheader={header}>
        <ListItem button component="a" href={twitterLink} target="_blank" rel="noopener">
          <ListItemIcon>
            <TwitterIcon />
          </ListItemIcon>
          <ListItemText primary="Twitter" />
        </ListItem>
        <ListItem
          button
          component="a"
          href={contactLink}
          onClick={onClose}
          target="_blank"
          rel="noopener">
          <ListItemIcon>
            <ContactUsIcon />
          </ListItemIcon>
          <ListItemText primary="Contact Us" />
        </ListItem>
      </List>
    </div>
  );

  return view;
};

export default MenuOutreach;
