import { withStyles } from '@material-ui/core/styles';
import Generator from '../components/Generator';

const styles = ({ breakpoints, spacing }) => ({
  form: {
    paddingTop: spacing.unit * 3,
    [breakpoints.up('md')]: {
      paddingLeft: spacing.unit * 2,
    },
  },
  preview: {
    alignSelf: 'flex-start',
    position: 'sticky',
    top: 0,
  },
  result: {
    padding: spacing.unit * 2,
    width: '100%',
  },
  root: {
    paddingTop: spacing.unit * 2,
  },
});

export default withStyles(styles)(Generator);
