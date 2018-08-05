import { withStyles } from '@material-ui/core/styles';
import NoMatch from '../components/NoMatch';

const styles = ({ spacing }) => ({
  headline: {
    marginLeft: spacing.unit * 3,
    marginRight: spacing.unit,
    marginTop: spacing.unit * 3,
  },
});

export default withStyles(styles)(NoMatch);
