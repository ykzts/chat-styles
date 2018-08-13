import { withStyles } from '@material-ui/core/styles';
import ColorPicker from '../components/ColorPicker';

const styles = {
  button: {
  },
  colorPalette: {
    borderRadius: '4px',
    height: '24px',
    width: '100%',
  },
};

export default ColorPicker |> withStyles(styles);
