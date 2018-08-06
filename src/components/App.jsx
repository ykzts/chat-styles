import AppBar from '@material-ui/core/AppBar';
import amber from '@material-ui/core/colors/amber';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import { Provider } from 'react-redux';
import { Route, Link, Switch } from 'react-router-dom';
import Generator from '../containers/Generator';
import NoMatch from '../containers/NoMatch';
import configureStore from '../store/configureStore';

const store = configureStore();

const theme = createMuiTheme({
  palette: {
    primary: amber,
  },
});

const App = ({ classes, title }) => (
  <Provider store={store}>
    <MuiThemeProvider sheetsManager={new Map()} theme={theme}>
      <Helmet defaultTitle={title} titleTemplate={`%s - ${title}`} />
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography color="inherit" className={classes.title} component={Link} noWrap to="/" variant="title">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route component={Generator} exact path="/" />
        <Route component={NoMatch} />
      </Switch>
    </MuiThemeProvider>
  </Provider>
);

App.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
  title: PropTypes.string.isRequired,
};

export default App;
