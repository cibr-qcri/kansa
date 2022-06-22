// React
import React from 'react';

// Material
import { Typography } from '@material-ui/core';

// Styles
import { Feature, useStyles } from './Analytics-styles';

const MainAnalytics = () => {
  // Variables
  const classes = useStyles();

  // JSX
  const view = (
    <div className={classes.root}>
      <Typography className={classes.title} color="primary" variant="h5">
        Security Analytics
      </Typography>
      <Typography className={classes.subtitle}>
        Get security audits with your search results
      </Typography>
      <div className={classes.features}>
        <Feature iconLigature="bug_report" text="Vulnerability detection" />
        <Feature iconLigature="done_all" text="Multi-tools scanning" />
        <Feature iconLigature="assessment" text="Detailed reporting" />
        <Feature iconLigature="offline_bolt" text="Activity monitoring" />
      </div>
    </div>
  );

  return view;
};

export default MainAnalytics;
