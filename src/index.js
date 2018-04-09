import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

const storeWithMiddleWare = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={storeWithMiddleWare(rootReducer)}>
    <App />
  </Provider>, document.getElementById('root')
);
registerServiceWorker();
