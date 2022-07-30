import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux'
import { applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import mySaga from './redux/sagas';
import reducers from './redux/reducers';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(mySaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
