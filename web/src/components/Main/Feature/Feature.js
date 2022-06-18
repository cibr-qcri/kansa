/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */

import { Icon, Typography } from '@mui/material';

import useStyles from './Feature-styles';

const Feature = ({ text, iconName }) => {
  const styles = useStyles();

  const view = (
    <div css={styles.root}>
      <Icon css={styles.icon} color="primary">
        {iconName}
      </Icon>
      <Typography>{text}</Typography>
    </div>
  );

  return view;
};

export default Feature;
