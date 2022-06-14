import { css } from '@emotion/react';

import { useTheme } from '@mui/system';

const useStyles = () => {
  const theme = useTheme();

  return {
    list: css`
      width: 240px;
    `,
  };
};

export default useStyles;
