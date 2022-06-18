/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */

import { Grid, List, ListItem, Typography } from '@mui/material';

import useStyles from './Main-styles';

import Feature from './Feature';
import Logo from './Logo';
import SearchBox from '../SearchBox/SearchBox';

export const Main = () => {
  const styles = useStyles();

  const features = (
    <div css={styles.title}>
      <Typography color="primary" variant="h5" gutterBottom>
        Features
      </Typography>
      <Typography>Cutting edge technologies to analyze smart contracts with</Typography>
      <List>
        <ListItem disableGutters>
          <Feature text="High Coverage" iconName="subtitles" />
        </ListItem>
        <ListItem disableGutters>
          <Feature text="Detailed Reporting" iconName="summarize" />
        </ListItem>
        <ListItem disableGutters>
          <Feature text="Easy to Use" iconName="verified-user" />
        </ListItem>
      </List>
    </div>
  );

  const technologies = (
    <div css={styles.title}>
      <Typography color="primary" variant="h5" gutterBottom>
        Open Technologies
      </Typography>
      <Typography>Clone, deploy, and use freely on any platform</Typography>
      <List>
        <ListItem disableGutters>
          <Feature text="Open-source software on GitHub" iconName="subtitles" />
        </ListItem>
        <ListItem disableGutters>
          <Feature text="Cloud native deployment with K8s" iconName="summarize" />
        </ListItem>
      </List>
    </div>
  );

  const view = (
    <div css={styles.container}>
      <Logo />
      <SearchBox containerStyle={styles.searchBoxContainer} />
      <Grid container justifyContent="space-between">
        <Grid item xs={12} sm={5}>
          {features}
        </Grid>
        <Grid item xs={12} sm={5}>
          {technologies}
        </Grid>
      </Grid>
    </div>
  );

  return view;
};

export default Main;
