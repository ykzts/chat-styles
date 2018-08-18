// @flow

import { highlight, languages } from 'prismjs';
import * as React from 'react';
import styled from 'styled-components';

const Root = styled.pre`
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
  styleSheet: string,
};

export default class Result extends React.Component<Props> {
  textFieldRef = React.createRef();

  shouldComponentUpdate(nextProps: Props) {
    const { styleSheet } = this.props;

    return styleSheet !== nextProps.styleSheet;
  }

  handleClick = (event: SyntheticEvent<*>) => {
    const { currentTarget } = event;
    const selection = window.getSelection();

    selection.selectAllChildren(currentTarget);
  }

  render() {
    const { styleSheet } = this.props;

    return (
      <Root role="presentation" onClick={this.handleClick}>
        {/* eslint-disable-next-line react/no-danger */}
        <code dangerouslySetInnerHTML={{ __html: highlight(styleSheet, languages.css, 'css') }} />
      </Root>
    );
  }
}
