import { css } from '@emotion/react';
import { useTheme } from '@mui/system';

const useStyles = () => {
  const theme = useTheme();
  return {
    container: css`
      width: 100%;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      align-items: flex-start;
      justify-content: center;
    `,
    searchBoxContainer: css`
      width: 460px;
      margin-bottom: ${theme.spacing(8)};
    `,
    subtitle: css`
      margin-bottom: ${theme.spacing(4)};
    `,
    title: css`
      margin-top: ${theme.spacing(2)};
      text-align: left;
    `,
  };
};

export default useStyles;
