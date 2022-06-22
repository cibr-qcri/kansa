// React
import React from 'react';

// Redux
import { useSelector } from 'react-redux';

// Material
import { Typography } from '@material-ui/core';

// Styles
import { Stat, useStyles } from './Stats-styles';

const MainStats = () => {
  // Variables
  const classes = useStyles();
  const stats = useSelector((state) => state.stats.data.computed);

  // JSX
  const view = (
    <div className={classes.root}>
      <Typography className={classes.title} color="primary" variant="h5">
        Extended Coverage
      </Typography>
      <Typography className={classes.subtitle}>
        Find what you are looking for in Ethereum
      </Typography>
      <div className={classes.stats}>
        <Stat value={stats.count.protocol} text="DeFi protocols" numeralFormat="0a" />
        <Stat value={stats.count.contract} text="Smart contracts" />
      </div>
    </div>
  );

  return view;
};

export default MainStats;
