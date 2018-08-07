import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { createStyleSheet } from '../actions/styleSheet';
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
    backgroundColor: '#eee',
    '& textarea': {
      padding: spacing.unit,
    },
  },
  root: {
    paddingTop: spacing.unit * 2,
  },
});

const mapStateToProps = state => ({
  styleSheet: state.styleSheet.rawText,
});

const mapDispatchToProps = dispatch => ({
  createStyleSheet: () => dispatch(createStyleSheet()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Generator));
