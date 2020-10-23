import { combineReducers, createStore, applyMiddleware } from 'redux';

import videoReducer from './video_reducer';

const rootReducer = combineReducers({
  videos: videoReducer
});

const store = createStore(rootReducer, {});

export default store;
