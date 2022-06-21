// React
import React from 'react';

// Material
import { Typography } from '@material-ui/core';

// Styles
import { Stat, useStyles } from './Stats-styles';

const MainStats = () => {
  // Variables
  const classes = useStyles();

  // JSX
  const view = (
    <div className={classes.root}>
      <Typography className={classes.title} color="primary" variant="h5">
        Extended Coverage
      </Typography>
      <Typography className={classes.subtitle}>
        Find what you are looking for on Ethereum
      </Typography>
      <div className={classes.stats}>
        <Stat value={0} text="Contracts" />
        <Stat value={0} text="DeFi Protocols" />
      </div>
    </div>
  );

  return view;
};

export default MainStats;
