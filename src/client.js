import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';

import createStoreInstance from "./store";
import Routes from './routes';

const store = createStoreInstance(window.__PRELOADED_STATE__)

/**
 * 前端注水：前端能够接管服务端代码
 */
ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
)