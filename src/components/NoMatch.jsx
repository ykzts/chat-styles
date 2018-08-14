// @flow

import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import Helmet from 'react-helmet';

type Props = {
  classes: Object,
  title?: string,
};

export default class NoMatch extends React.Component<Props> {
  static defaultProps = {
    title: '404 Not Found',
  };

  shouldComponentUpdate(nextProps: Props) {
    const { title } = this.props;

    return title !== nextProps.title;
  }

  render() {
    const { classes, title } = this.props;

    return (
      <>
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
      </>
    );
  }
}
