import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Generator from '../components/Generator';

const styles = ({ breakpoints, spacing }) => ({
  colorPalette: {
    minHeight: '24px',
    width: '100%',
  },
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
  headline: {
    fontSize: '1.5rem',
  },
  root: {
    paddingTop: spacing.unit * 2,
  },
});

export default connect()(withStyles(styles)(Generator));
