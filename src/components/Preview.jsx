import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import preview from '../files/preview.html';

// eslint-disable-next-line react/prefer-stateless-function
export default class Preview extends Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.any).isRequired,
  };

  constructor(...args) {
    super(...args);

    this.frameRef = React.createRef();
  }

  state = {
    frameHeight: 0,
  };

  componentDidMount() {
    const { current: frame } = this.frameRef;
    frame.addEventListener('load', this.handleLoad);
  }

  componentWillUnmount() {
    const { current: frame } = this.frameRef;
    frame.ownerDocument.removeEventListener('load', this.handleLoad);
  }

  handleLoad = () => {
    const { document: doc } = this.frameRef.current.contentWindow;
    this.setState({
      frameHeight: doc.documentElement.scrollHeight,
    });
  }

  render() {
    const { classes } = this.props;
    const { frameHeight } = this.state;

    return (
      <Fragment>
        <Typography className={classes.title} variant="subheading">
          プレビュー
        </Typography>
        <Paper className={classes.paper}>
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
