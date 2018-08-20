// @flow

import { highlight, languages } from 'prismjs';
import * as React from 'react';
import styled from 'styled-components';
import Icon from './Icon';

const Section = styled.section`
  margin-top: 50px;
`;

const Title = styled.h2`
  color: #666;
  font-size: 1rem;
  font-weight: bold;

  svg {
    margin-right: 0.5rem;
  }
`;

const Pre = styled.pre`
  background-color: #f5f2f0;
  display: block;
  lineheight: 1.5;
  margin: 30px 0 0;
  max-height: 500px;
  overflow-wrap: break-word;
  overflow-y: scroll;
  padding: 1em;
  white-space: pre-wrap;
`;

const Code = styled.code`
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
      <Section>
        <Title>
          <Icon name="code" />
          CSS
        </Title>
        <Pre role="presentation" onClick={this.handleClick}>
          {/* eslint-disable-next-line react/no-danger */}
          <Code dangerouslySetInnerHTML={{ __html: highlight(styleSheet, languages.css, 'css') }} />
        </Pre>
      </Section>
    );
  }
}
