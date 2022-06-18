import { css } from '@emotion/react';
import { useTheme } from '@mui/system';

const useStyles = () => {
  const theme = useTheme();

  return {
    root: css`
      border-radius: 10px;
      width: 100%;
    `,
    paper: css`
      display: flex;
      height: 60px;
      padding: ${theme.spacing(1)};
    `,
    inputBase: css`
      flex: 1;
      width: 100%;
      padding: ${theme.spacing(0.5, 0.5, 0.5, 0.5)};
      '&.muiinputbase-input': {
        paddingleft: ${theme.spacing(4)};
        transition: ${theme.transitions.create('width')};
      }
    `,
  };
};

export default useStyles;
