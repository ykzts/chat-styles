import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React, { Fragment, PureComponent } from 'react';
import Helmet from 'react-helmet';

export default class NoMatch extends PureComponent {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.any).isRequired,
    title: PropTypes.string,
  };

  static defaultProps = {
    title: '404 Not Found',
  };

  render() {
    const { classes, title } = this.props;

    return (
      <Fragment>
        <Helmet>
          <title>
            {title}
          </title>
        </Helmet>
        <main>
          <Typography className={classes.headline} variant="headline">
            {title}
          </Typography>
        </main>
      </Fragment>
    );
  }
}
