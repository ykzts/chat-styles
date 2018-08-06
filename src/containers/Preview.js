import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Preview from '../components/Preview';

const styles = ({ breakpoints, spacing }) => ({
  frame: {
    border: '0',
    height: '0',
    width: '100%',
  },
  paper: {
    margin: spacing.unit * 2,
    padding: spacing.unit * 1,
    [breakpoints.up('md')]: {
      padding: spacing.unit * 3,
    },
  },
  title: {
    fontSize: '1.5rem',
  },
});

export default connect()(withStyles(styles)(Preview));
