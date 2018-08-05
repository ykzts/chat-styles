import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './containers/App';
import { title } from './templates';

const render = (element, container) => new Promise((resolve, reject) => {
  try {
    ReactDOM.render(element, container, resolve);
  } catch (error) {
    reject(error);
  }
});

const main = async () => {
  const container = document.getElementById('root');
  const element = (
    <Router>
      <App title={title} />
    </Router>
  );
  await render(element, container);
};

main()
  .catch(error => console.error(error)); // eslint-disable-line no-console
