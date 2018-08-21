// @flow

import { highlight, languages } from 'prismjs';
import * as React from 'react';
import styled from 'styled-components';
import Icon from './Icon';

const Section = styled.section`
  margin-top: 50px;
`;

const Header = styled.header`
  align-items: center;
  display: flex;
`;

const Title = styled.h2`
  color: #666;
  font-size: 1rem;
  font-weight: bold;

  svg {
    margin-right: 0.5rem;
  }
`;

const Button = styled.button`
  background-color: #19ab27;
  border: 0;
  border-radius: 16px;
  color: #fff;
  display: block;
  font-family: inherit;
  font-size: 0.9rem;
  margin: 0 0 0 50px;
  padding: 4px 14px;

  &:focus {
    outline: 0;
  }

  svg {
    margin-right: 0.3rem;
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

const TextArea = styled.textarea`
  display: block;
  left: -1000px;
  position: absolute;
  top: 0;
`;

type Props = {
  styleSheet: string,
};

export default class Result extends React.Component<Props> {
  preRef = React.createRef();

  textAreaRef = React.createRef();

  shouldComponentUpdate(nextProps: Props) {
    const { styleSheet } = this.props;

    return styleSheet !== nextProps.styleSheet;
  }

  handleCopy = () => {
    const { current: preElement } = this.preRef;
    const { current: textAreaElement } = this.textAreaRef;

    if (textAreaElement) {
      textAreaElement.select();
      document.execCommand('copy');
    }

    if (preElement) {
      const selection = window.getSelection();
      selection.selectAllChildren(preElement);
    }
  }

  render() {
    const { styleSheet } = this.props;

    return (
      <Section>
        <Header>
          <Title>
            <Icon name="code" />
            CSS
          </Title>
          <Button onClick={this.handleCopy} type="button">
            <Icon height={16} name="file_copy" width={16} />
            コピーする
          </Button>
        </Header>
        <Pre innerRef={this.preRef} role="presentation">
          {/* eslint-disable-next-line react/no-danger */}
          <Code dangerouslySetInnerHTML={{ __html: highlight(styleSheet, languages.css, 'css') }} />
        </Pre>
        <TextArea aria-hidden="true" innerRef={this.textAreaRef} readOnly value={styleSheet} />
      </Section>
    );
  }
}
