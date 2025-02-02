import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './reducers'

const initialState = {};

const store = createStore(rootReducer,
    initialState, 
    composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;