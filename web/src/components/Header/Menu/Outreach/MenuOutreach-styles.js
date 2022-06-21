// Utils
import { makeStyles } from '../../../../utils';

export const stylesCreator = () => ({
  Default: {
    root: {},
    header: {
      textTransform: 'uppercase',
    },
    list: {
      width: 240,
    },
  },
});

// Local
export const useStyles = makeStyles(stylesCreator);
