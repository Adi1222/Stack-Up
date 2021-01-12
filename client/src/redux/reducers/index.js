import { combineReducers } from 'redux';

import authReducer from '../reducers/auth/auth';

const rootReducer = combineReducers({
    auth: authReducer,
})

export default rootReducer;