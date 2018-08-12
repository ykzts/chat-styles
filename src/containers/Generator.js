import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { fetchChatStyles } from '../actions/chatStyles';
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
    backgroundColor: '#f5f2f0',
    display: 'block',
    lineHeight: '1.5',
    margin: '2rem 0 0',
    maxHeight: '500px',
    overflowWrap: 'break-word',
    overflowY: 'scroll',
    padding: '1em',
    whiteSpace: 'pre-wrap',
    '& .token.atrule': {
      color: '#07a',
    },
    '& .token.comment': {
      color: 'slategrey',
    },
    '& .token.function': {
      color: '#dd4a68',
    },
    '& .token.important': {
      color: '#e90',
      fontWeight: '500',
    },
    '& .token.property': {
      color: '#905',
    },
    '& .token.punctuation': {
      color: '#999',
    },
    '& .token.selector, & .token.string': {
      color: '#690',
    },
    '& .token.url': {
      backgroundColor: 'hsla(0, 0%, 100%, .5)',
      color: '#9a6e3a',
    },
  },
  root: {
    paddingTop: spacing.unit * 2,
  },
});

const mapStateToProps = state => ({
  hasChatStyles: !state.chatStyles.get('values').isEmpty(),
  styleSheet: state.styleSheet.get('rawText'),
});

const mapDispatchToProps = dispatch => ({
  fetchChatStyles: () => dispatch(fetchChatStyles()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Generator));
