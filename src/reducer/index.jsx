import thunk from "redux-thunk";
import promise from "redux-promise";
import { createLogger } from "redux-logger";
import { combineReducers, createStore, applyMiddleware } from "redux";

import  photoshootsDaily from './photoshootsDailyReducer';
import photoshotDetail from './photoshootDetailReducer';

const logger = createLogger();
const reducer = combineReducers({
  photoshootsDaily,
  photoshotDetail,
});

const store = createStore(reducer, applyMiddleware(thunk, promise, logger),);

export default store;
