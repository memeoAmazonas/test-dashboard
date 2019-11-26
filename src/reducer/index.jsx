import thunk from "redux-thunk";
import promise from "redux-promise";
import { createLogger } from "redux-logger";
import { combineReducers, createStore, applyMiddleware } from "redux";

import  photoshootsDaily from './photoshootsDailyReducer';

const logger = createLogger();
const reducer = combineReducers({
  photoshootsDaily,
});

const store = createStore(reducer, applyMiddleware(thunk, promise),);

export default store;
