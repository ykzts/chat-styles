// @flow

import * as React from 'react';

type Props = {
  fetchComponentr: () => Promise,
};

type State = {
  component?: React.Element<any>,
};

export default class LazyLoader extends React.Component<Props, State> {
  state = {
    component: null,
  };

  componentDidMount() {
    this.load(this.props);
  }

  shouldComponentUpdate(nextProps: Props, nextState: State) {
    const { component } = this.state;

    return component !== nextState.component;
  }

  async load({ fetchComponent, ...props }: Props) {
    if (typeof fetchComponent === 'function') {
      const { default: LoadedComponent } = await fetchComponent();

      this.setState({
        component: (
          <LoadedComponent {...props} />
        ),
      });
    }
  }

  render() {
    const { component } = this.state;

    return component;
  }
}
