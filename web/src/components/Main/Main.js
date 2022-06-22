// React
import React from 'react';

// Components
import Analytics from './Analytics';
import Stats from './Stats';
import Tech from './Tech';

// Styles
import { Logo, SearchBox, useStyles } from './Main-styles';

export const Main = () => {
  // Variables
  const classes = useStyles();

  // JSX
  const view = (
    <div className={classes.root}>
      <Logo />
      <SearchBox />
      <div className={classes.features}>
        <Analytics />
        <div className={classes.otherFeatures}>
          <Stats />
          <Tech />
        </div>
      </div>
    </div>
  );

  return view;
};

export default Main;
