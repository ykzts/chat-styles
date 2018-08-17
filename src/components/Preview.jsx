// @flow

import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import * as React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import preview from '../files/preview.html';

const Root = styled(Grid)`
  align-self: flex-start;
  position: sticky;
  top: 0;
`;

const Title = styled(Typography)`
  font-size: 1.5rem;
`;

const Content = styled(Paper)`
  background-image:
    linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%, #eee 100%),
    linear-gradient(45deg, #eee 25%, #fff 25%, #fff 75%, #eee 75%, #eee 100%);
  background-size: 20px 20px;
  background-position: 0 0, 10px 10px;
  margin: 16px;
  minHeight: 500px;
  padding: 8px;

  &.invert {
    background-image:
      linear-gradient(45deg, #333 25%, transparent 25%, transparent 75%, #333 75%, #333 100%),
      linear-gradient(45deg, #333 25%, #444 25%, #444 75%, #333 75%, #333 100%);
  }

  @media (min-width: 960px) {
    padding: 24px;
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
  fetchPreviewInvert: () => void,
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
    const { fetchPreviewInvert } = this.props;
    const { current: frame } = this.frameRef;

    fetchPreviewInvert();

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

  handleChangeInvert = (event: SyntheticEvent<*>, checked: boolean) => {
    const { changePreviewInvert } = this.props;

    changePreviewInvert(checked);
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
      <Root item sm={6} xs={12}>
        <Helmet>
          <link as="style" crossOrigin="anonymous" href="https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i" rel="preload" />
          <link as="style" crossOrigin="anonymous" href="https://fonts.googleapis.com/earlyaccess/notosansjapanese.css" rel="preload" />
        </Helmet>
        <Title variant="subheading">
          プレビュー
        </Title>
        <FormGroup>
          <FormControlLabel
            control={(
              <Switch checked={invert} onChange={this.handleChangeInvert} color="primary" />
            )}
            label="背景を暗くする"
            labelPlacement="start"
          />
        </FormGroup>
        <Content className={classNames({ invert })}>
          <iframe
            className={classNames({ active: frameHeight > 0 })}
            ref={this.frameRef}
            src={preview}
            style={{ height: `${frameHeight}px` }}
            title={`${preview} on frame`}
          />
        </Content>
      </Root>
    );
  }
}
