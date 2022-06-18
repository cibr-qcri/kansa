import { css } from '@emotion/react';
import { useTheme } from '@mui/system';

const useStyles = () => {
  const theme = useTheme();

  return {
    root: css`
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: ${theme.spacing(2)};
    `,
    icon: css`
      font-size: 32;
      margin-right: ${theme.spacing(2)};
    `,
  };
};

export default useStyles;
