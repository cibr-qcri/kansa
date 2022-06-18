import { css } from '@emotion/react';

const useStyles = () => {
  return {
    container: css`
      display: flex;
      flex-direction: column;
      min-height: 100%;
    `,
    subContainer: css`
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
    `,
  };
};

export default useStyles;
