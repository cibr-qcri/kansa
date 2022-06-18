import { css } from '@emotion/react';

import { useTheme } from '@mui/system';

const useStyles = () => {
  const theme = useTheme();

  return {
    container: css`
      display: flex;
      flex-direction: column;
      margin-bottom: ${theme.spacing(2)};
      text-align: left;
    `,
    link: css`
      '&:hover': {
        text-decoration: none;
      }
    `,
    title: css`
      font-size: 60px;
    `,
    subtitle: css`
      margin-top: ${theme.spacing(-1)};
    `,
  };
};

export default useStyles;
