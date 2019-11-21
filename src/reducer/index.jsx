import thunk from "redux-thunk";
import promise from "redux-promise";
import { createLogger } from "redux-logger";
import { combineReducers, createStore, applyMiddleware } from "redux";

import  photoshotDaily from './photoshotDaily';

const logger = createLogger();
const reducer = combineReducers({
  photoshotDaily,
});

const store = createStore(reducer, applyMiddleware(thunk, promise, logger),);

export default store;
