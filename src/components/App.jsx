// @flow

import AppBar from '@material-ui/core/AppBar';
import amber from '@material-ui/core/colors/amber';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import Helmet from 'react-helmet';
import { Provider } from 'react-redux';
import { Route, Link, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Generator from '../containers/Generator';
import configureStore from '../store/configureStore';
import NoMatch from './NoMatch';

const store = configureStore();

const theme = createMuiTheme({
  palette: {
    primary: amber,
  },
});

const Title = styled(Typography)`
  text-decoration: none;
`;

const Footer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 24px 16px 32px;

  p {
    margin: 0;
    text-align: right;
  }

  a {
    color: #aaa;
    text-decoration: none;
  }
`;

type Props = {
  title: string,
};

export default ({ title }: Props) => (
  <Provider store={store}>
    <MuiThemeProvider sheetsManager={new Map()} theme={theme}>
      <Helmet defaultTitle={title} titleTemplate={`%s - ${title}`} />
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Title color="inherit" component={Link} noWrap to="/" variant="title">
            {title}
          </Title>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route component={Generator} exact path="/" />
        <Route component={NoMatch} />
      </Switch>
      <Footer>
        <p>
          Inspired by
          &#8203;
          <a href="https://chatv2.septapus.com/" rel="noopener noreferrer" target="_blank">
            Chat v2.0 Style Generator
          </a>
        </p>
        <p>
          Created by
          &#8203;
          <a href="https://ykzts.com/" rel="noopener noreferrer" target="_blank">
            Yamagishi Kazutoshi
          </a>
        </p>
        <p>
          <a href="https://github.com/ykzts/chat-styles" rel="noopener noreferrer" target="_blank">
            Source code
          </a>
        </p>
      </Footer>
    </MuiThemeProvider>
  </Provider>
);
