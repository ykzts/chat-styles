// @flow

import Grid from '@material-ui/core/Grid';
import { highlight, languages } from 'prismjs';
import * as React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Form from '../containers/Form';
import Preview from '../containers/Preview';
import previewPath from '../files/preview.html';

const Root = styled(Grid)`
  padding-top: 16px;
`;

const Result = styled.pre`
  background-color: #f5f2f0;
  display: block;
  lineheight: 1.5;
  margin: 2rem 0 0;
  max-height: 500px;
  overflow-wrap: break-word;
  overflow-y: scroll;
  padding: 1em;
  white-space: pre-wrap;

  .token.atrule: {
    color: #07a;
  }

  .token.comment {
    color: slategrey;
  }

  .token.function {
    color: #dd4a68;
  }

  .token.important {
    color: #e90;
    font-weight: 500;
  }

  .token.property {
    color: #905;
  }

  .token.punctuation {
    color: #999;
  }

  .token.selector,
  .token.string {
    color: #690;
  }

  .token.url {
    background-color: hsla(0, 0%, 100%, .5);
    color: #9a6e3a;
  }
`;

type Props = {
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
    const { hasChatStyles, styleSheet } = this.props;

    return (
      <main>
        <Helmet>
          <link as="document" href={previewPath} type="text/html" />
        </Helmet>
        {hasChatStyles && (
          <Root container>
            <Form />
            <Preview />
          </Root>
        )}
        <Result role="presentation" onClick={this.handleClick}>
          {/* eslint-disable-next-line react/no-danger */}
          <code dangerouslySetInnerHTML={{ __html: highlight(styleSheet, languages.css, 'css') }} />
        </Result>
      </main>
    );
  }
}
