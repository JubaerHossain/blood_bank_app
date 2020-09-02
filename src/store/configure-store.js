import {createStore, applyMiddleware, compose} from 'redux';
import reducer from '../reducers/index';

const middleware = [];

const store = createStore(
  reducer,
  compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
);

export default store;
