// @flow

import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import * as React from 'react';
import Helmet from 'react-helmet';
import preview from '../files/preview.html';

type Props = {
  changePreviewInvert: (boolean) => void,
  classes: Object,
  fetchPreviewInvert: () => void,
  invert: boolean,
  styleSheet: string,
};

type State = {
  frameHeight: number,
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
    frame.addEventListener('load', this.handleLoad);
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

    frame.removeEventListener('load', this.handleLoad);
  }

  handleChangeInvert = (event: SyntheticEvent<*>, checked: boolean) => {
    const { changePreviewInvert } = this.props;

    changePreviewInvert(checked);
  }

  handleLoad = () => {
    const { styleSheet } = this.props;

    this.loadStyleSheet(styleSheet);
  }

  handleLoadStyleSheet = () => {
    const { current: frame } = this.frameRef;
    const { contentDocument: doc } = frame;

    this.setState({
      frameHeight: doc.documentElement.scrollHeight,
    });
  }

  createLinkElement(styleSheet: string): HTMLLinkElement<*> {
    const { current: frame } = this.frameRef;
    const { contentDocument: doc } = frame;

    const link = doc.createElement('link');
    link.rel = 'stylesheet';
    link.href = `data:text/css;charset=UTF-8;base64,${btoa(styleSheet)}`;
    link.addEventListener('load', this.handleLoadStyleSheet);
    return link;
  }

  loadStyleSheet(styleSheet) {
    if (styleSheet && styleSheet.length > 0) {
      const { current: frame } = this.frameRef;
      const { contentDocument: doc } = frame;

      if (doc.head) {
        const link = this.createLinkElement(styleSheet);

        this.removeLinkElements();
        doc.head.appendChild(link);
      }
    }
  }

  removeLinkElements() {
    const { current: frame } = this.frameRef;
    const { contentDocument: doc } = frame;
    const links = doc.querySelectorAll('link[rel="stylesheet"][href^="data:text/css"]');

    [].forEach.call(links, link => link.parentNode.removeChild(link));
  }

  render() {
    const { classes, invert } = this.props;
    const { frameHeight } = this.state;

    return (
      <React.Fragment>
        <Helmet>
          <link as="style" crossOrigin="anonymous" href="https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i" rel="preload" />
          <link as="style" crossOrigin="anonymous" href="https://fonts.googleapis.com/earlyaccess/notosansjapanese.css" rel="preload" />
        </Helmet>
        <Typography className={classes.title} variant="subheading">
          プレビュー
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={(
              <Switch checked={invert} onChange={this.handleChangeInvert} color="primary" />
            )}
            label="背景を暗くする"
            labelPlacement="start"
          />
        </FormGroup>
        <Paper className={classNames(classes.paper, { [classes.paperInvert]: invert })}>
          <iframe
            className={classNames(classes.frame, { [classes.frameActive]: frameHeight > 0 })}
            ref={this.frameRef}
            src={preview}
            style={{ height: `${frameHeight}px` }}
            title={`${preview} on frame`}
          />
        </Paper>
      </React.Fragment>
    );
  }
}
