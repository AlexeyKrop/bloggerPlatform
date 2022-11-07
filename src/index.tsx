import React from 'react';

import './index.css';
import 'normalize.css';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './store/store';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

reportWebVitals();
