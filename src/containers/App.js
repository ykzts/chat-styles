import { withStyles } from '@material-ui/core/styles';
import App from '../components/App';

const styles = ({ spacing }) => ({
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    marginTop: spacing.unit * 4,
    paddingBottom: spacing.unit * 4,
    paddingLeft: spacing.unit * 2,
    paddingRight: spacing.unit * 2,
    paddingTop: spacing.unit * 8,
    '& p': {
      margin: 0,
      textAlign: 'right',
    },
    '& a': {
      color: '#aaa',
      textDecoration: 'none',
    },
  },
  title: {
    textDecoration: 'none',
  },
});

export default withStyles(styles)(App);
