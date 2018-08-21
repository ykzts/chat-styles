// @flow

import classNames from 'classnames';
import * as React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import previewPath from '../files/preview.html';
import Icon from './Icon';
import Switch from './Switch';

const Section = styled.section`
  align-self: flex-start;
  padding: 0 30px;
  position: sticky;
  top: 0;
  width: 50%;
`;

const Header = styled.header`
  display: flex;
`;

const Title = styled.h2`
  color: #666;
  font-size: 1rem;
  font-weight: bold;
  margin: 0 50px 0 0;

  svg {
    margin-right: 0.5rem;
  }
`;

const Content = styled.div`
  background-image:
    linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%, #eee 100%),
    linear-gradient(45deg, #eee 25%, #fff 25%, #fff 75%, #eee 75%, #eee 100%);
  background-size: 20px 20px;
  background-position: 0 0, 10px 10px;
  border-radius: 5px;
  box-shadow:
    0 1px 5px 0 rgba(0, 0, 0, 0.2),
    0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12);
  margin: 30px 0 0 0;
  minHeight: 500px;
  padding: 4px;

  &.invert {
    background-image:
      linear-gradient(45deg, #333 25%, transparent 25%, transparent 75%, #333 75%, #333 100%),
      linear-gradient(45deg, #333 25%, #444 25%, #444 75%, #333 75%, #333 100%);
  }

  @media (min-width: 960px) {
    padding: 18px;
  }

  iframe {
    border: 0;
    height: 0;
    width: 100%;

    &.active {
      outline: dotted 1px #666;
    }
  }
`;

type Props = {
  changePreviewInvert: (boolean) => void,
  invert: boolean,
  styleSheet: string,
};

type State = {
  frameHeight: number,
};


const removeLinkElements = (doc: Document): void => {
  const links = doc.querySelectorAll('link[rel="stylesheet"][href^="data:text/css"]');

  [].forEach.call(links, link => link.parentNode.removeChild(link));
};

export default class Preview extends React.Component<Props, State> {
  frameRef = React.createRef();

  state = {
    frameHeight: 0,
  };

  componentDidMount() {
    const { current: frame } = this.frameRef;

    if (frame) {
      frame.addEventListener('load', this.handleLoad);
    }
  }

  shouldComponentUpdate(nextProps: Props, nextState: State) {
    const { invert, styleSheet } = this.props;
    const { frameHeight } = this.state;

    return invert !== nextProps.invert
      || styleSheet !== nextProps.styleSheet
      || frameHeight !== nextState.frameHeight;
  }

  componentDidUpdate(prevProps: Props) {
    const { styleSheet } = this.props;

    if (prevProps.styleSheet !== styleSheet) {
      this.loadStyleSheet(styleSheet);
    }
  }

  componentWillUnmount() {
    const { current: frame } = this.frameRef;

    if (frame) {
      frame.removeEventListener('load', this.handleLoad);
    }
  }

  handleChangeInvert = (event: SyntheticEvent<HTMLInputElement>) => {
    const { changePreviewInvert } = this.props;
    const target: HTMLInputElement = (event.target: any);

    changePreviewInvert(target.checked);
  }

  handleLoad = () => {
    const { styleSheet } = this.props;

    this.loadStyleSheet(styleSheet);
  }

  handleLoadStyleSheet = (event: ProgressEvent) => {
    const target: HTMLLinkElement = (event.target: any);
    const { ownerDocument: doc } = target;

    this.setState({
      frameHeight: doc.documentElement ? doc.documentElement.scrollHeight : 0,
    });
  }

  createLinkElement(doc: Document, styleSheet: string): HTMLLinkElement {
    const link = doc.createElement('link');

    link.rel = 'stylesheet';
    link.href = `data:text/css;charset=UTF-8;base64,${btoa(styleSheet)}`;
    link.addEventListener('load', this.handleLoadStyleSheet);
    return link;
  }

  loadStyleSheet(styleSheet: string) {
    const { current: frame } = this.frameRef;

    if (styleSheet && styleSheet.length > 0 && frame) {
      const { contentDocument: doc } = frame;

      if (doc.head) {
        const link = this.createLinkElement(doc, styleSheet);

        removeLinkElements(doc);
        doc.head.appendChild(link);
      }
    }
  }

  render() {
    const { invert } = this.props;
    const { frameHeight } = this.state;

    return (
      <>
        <Helmet>
          <link as="style" crossOrigin="anonymous" href="https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i" rel="preload" />
          <link as="style" crossOrigin="anonymous" href="https://fonts.googleapis.com/earlyaccess/notosansjapanese.css" rel="preload" />
        </Helmet>
        <Section>
          <Header>
            <Title>
              <Icon name="visibility" />
              プレビュー
            </Title>
            <Switch
              checked={invert}
              label="背景を暗くする"
              onChange={this.handleChangeInvert}
            />
          </Header>
          <Content className={classNames({ invert })}>
            <iframe
              className={classNames({ active: frameHeight > 0 })}
              ref={this.frameRef}
              sandbox
              src={previewPath}
              style={{ height: `${frameHeight}px` }}
              title={`${previewPath} on frame`}
            />
          </Content>
        </Section>
      </>
    );
  }
}
