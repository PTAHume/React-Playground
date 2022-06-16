import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const render = () => {
  root.render(
    React.createElement(
      StrictMode,
      null,
      React.createElement(App, null),
      React.createElement('pre', null, new Date().toLocaleTimeString())
    )
  );
};

setInterval(render, 1000);
