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
    const { invert } = this.props;
    const { frameHeight } = this.state;

    return invert !== nextProps.invert || frameHeight !== nextState.frameHeight;
  }

  componentWillUnmount() {
    const { current: frame } = this.frameRef;
    frame.ownerDocument.removeEventListener('load', this.handleLoad);
  }

  handleChangeInvert = (event, checked) => {
    const { changePreviewInvert } = this.props;
    changePreviewInvert(checked);
  }

  handleLoad = () => {
    const { document: doc } = this.frameRef.current.contentWindow;
    this.setState({
      frameHeight: doc.documentElement.scrollHeight,
    });
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
            allowTransparency
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
