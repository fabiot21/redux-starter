import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

const storeWithMiddleWare = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={storeWithMiddleWare(rootReducer)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/' component={Home}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>, document.getElementById('root')
);
registerServiceWorker();
