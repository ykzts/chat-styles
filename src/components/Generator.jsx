// @flow

import Grid from '@material-ui/core/Grid';
import { highlight, languages } from 'prismjs';
import * as React from 'react';
import Helmet from 'react-helmet';
import Form from '../containers/Form';
import Preview from '../containers/Preview';
import previewPath from '../files/preview.html';

type Props = {
  classes: Object,
  fetchChatStyles: () => void,
  hasChatStyles: boolean,
  styleSheet: string,
};

export default class Generator extends React.Component<Props> {
  textFieldRef = React.createRef();

  componentDidMount() {
    const { fetchChatStyles } = this.props;

    fetchChatStyles();
  }

  shouldComponentUpdate(nextProps: Props) {
    const { hasChatStyles, styleSheet } = this.props;

    return styleSheet !== nextProps.styleSheet
      || hasChatStyles !== nextProps.hasChatStyles;
  }

  handleClick = (event: SyntheticEvent<*>) => {
    const { currentTarget } = event;
    const selection = window.getSelection();

    selection.selectAllChildren(currentTarget);
  }

  render() {
    const { classes, hasChatStyles, styleSheet } = this.props;

    return (
      <main>
        <Helmet>
          <link as="document" href={previewPath} type="text/html" />
        </Helmet>
        {hasChatStyles && (
          <Grid className={classes.root} container>
            <Grid className={classes.form} item sm={6} xs={12}>
              <Form />
            </Grid>
            <Grid className={classes.preview} item sm={6} xs={12}>
              <Preview />
            </Grid>
          </Grid>
        )}
        <pre className={classes.result} role="presentation" onClick={this.handleClick}>
          {/* eslint-disable-next-line react/no-danger */}
          <code dangerouslySetInnerHTML={{ __html: highlight(styleSheet, languages.css, 'css') }} />
        </pre>
      </main>
    );
  }
}
