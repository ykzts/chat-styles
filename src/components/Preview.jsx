import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import preview from '../files/preview.html';

export default class Preview extends Component {
  frameRef = React.createRef();

  static propTypes = {
    changePreviewInvert: PropTypes.func.isRequired,
    classes: PropTypes.objectOf(PropTypes.any).isRequired,
    fetchPreviewInvert: PropTypes.func.isRequired,
    invert: PropTypes.bool.isRequired,
    styleSheet: PropTypes.string.isRequired,
  };

  state = {
    frameHeight: 0,
  };

  componentDidMount() {
    const { fetchPreviewInvert } = this.props;
    const { current: frame } = this.frameRef;

    fetchPreviewInvert();
    frame.addEventListener('load', this.handleLoad);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { invert, styleSheet } = this.props;
    const { frameHeight } = this.state;

    return invert !== nextProps.invert
      || styleSheet !== nextProps.styleSheet
      || frameHeight !== nextState.frameHeight;
  }

  componentDidUpdate(prevProps) {
    const { styleSheet } = this.props;

    if (prevProps.styleSheet !== styleSheet) {
      this.loadStyleSheet(styleSheet);
    }
  }

  componentWillUnmount() {
    const { current: frame } = this.frameRef;

    frame.removeEventListener('load', this.handleLoad);
  }

  handleChangeInvert = (event, checked) => {
    const { changePreviewInvert } = this.props;

    changePreviewInvert(checked);
  }

  handleLoad = () => {
    const { styleSheet } = this.props;
    const { current: frame } = this.frameRef;
    const { document: doc } = frame.contentWindow;

    this.setState({
      frameHeight: doc.documentElement.scrollHeight,
    }, () => {
      this.loadStyleSheet(styleSheet);
    });
  }

  handleLoadStyleSheet = () => {
    const { current: frame } = this.frameRef;
    const { document: doc } = frame.contentWindow;

    this.setState({
      frameHeight: doc.documentElement.scrollHeight,
    });
  }

  createLinkElement(styleSheet) {
    const { current: frame } = this.frameRef;
    const { document: doc } = frame.contentWindow;

    const link = doc.createElement('link');
    link.rel = 'stylesheet';
    link.href = `data:text/css;charset=UTF-8;base64,${btoa(styleSheet)}`;
    link.addEventListener('load', this.handleLoadStyleSheet);
    return link;
  }

  loadStyleSheet(styleSheet) {
    if (styleSheet && styleSheet.length > 0) {
      const { current: frame } = this.frameRef;
      const { document: doc } = frame.contentWindow;
      const link = this.createLinkElement(styleSheet);

      this.removeLinkElements();
      doc.head.appendChild(link);
    }
  }

  removeLinkElements() {
    const { current: frame } = this.frameRef;
    const { document: doc } = frame.contentWindow;
    const links = doc.querySelectorAll('link[rel="stylesheet"][href^="data:text/css"]');

    [].forEach.call(links, link => link.parentNode.removeChild(link));
  }

  render() {
    const { classes, invert } = this.props;
    const { frameHeight } = this.state;

    return (
      <Fragment>
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
            className={classes.frame}
            ref={this.frameRef}
            src={preview}
            style={{ height: `${frameHeight}px` }}
            title={`${preview} on frame`}
          />
        </Paper>
      </Fragment>
    );
  }
}
