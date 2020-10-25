import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

import videoReducer from './video_reducer';

const rootReducer = combineReducers({
  videos: videoReducer,
  form: formReducer
})

const store = createStore(rootReducer, {}, applyMiddleware(thunk))

export default store
