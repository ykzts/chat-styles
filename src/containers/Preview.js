import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { changePreviewInvert, fetchPreviewInvert } from '../actions/preview';
import Preview from '../components/Preview';

const styles = ({ breakpoints, spacing }) => ({
  frame: {
    border: '0',
    height: '0',
    outline: 'dotted 1px #666',
    width: '100%',
  },
  paper: {
    backgroundImage: [
      'linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%, #eee 100%)',
      'linear-gradient(45deg, #eee 25%, #fff 25%, #fff 75%, #eee 75%, #eee 100%)',
    ].join(', '),
    backgroundSize: '20px 20px',
    backgroundPosition: '0 0, 10px 10px',
    margin: spacing.unit * 2,
    padding: spacing.unit * 1,
    [breakpoints.up('md')]: {
      padding: spacing.unit * 3,
    },
  },
  paperInvert: {
    backgroundImage: [
      'linear-gradient(45deg, #333 25%, transparent 25%, transparent 75%, #333 75%, #333 100%)',
      'linear-gradient(45deg, #333 25%, #444 25%, #444 75%, #333 75%, #333 100%)',
    ].join(', '),
  },
  title: {
    fontSize: '1.5rem',
  },
});

const mapStateToProps = state => ({
  invert: state.preview.invert,
});

const mapDispatchToProps = dispatch => ({
  changePreviewInvert: invert => dispatch(changePreviewInvert(invert)),
  fetchPreviewInvert: () => dispatch(fetchPreviewInvert()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Preview));
