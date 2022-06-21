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
        Smart Contract Analytics
      </Typography>
      <Typography className={classes.subtitle}>
        The most powerful security auditing tool for Ethereum
      </Typography>
      <div className={classes.features}>
        <Feature iconLigature="bug_report" text="Vulnerability Scanning" />
        <Feature iconLigature="code" text="Multiple Tools" />
        <Feature iconLigature="assessment" text="Detailed Reporting" />
        <Feature iconLigature="offline_bolt" text="Activity monitoring" />
      </div>
    </div>
  );

  return view;
};

export default MainAnalytics;
