// Utils
import { makeStyles } from '../../utils';

export const stylesCreator = (theme) => ({
  Default: {
    root: {
      width: '100%',
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    typography: {
      padding: theme.spacing(1),
    },
    button: {
      maxWidth: 300,
      width: '100%',
      marginTop: theme.spacing(1),
      '&:nth-of-type(1)': {
        marginTop: theme.spacing(2),
      },
    },
  },
});

// Local
export const useStyles = makeStyles(stylesCreator);
