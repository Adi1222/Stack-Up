import { combineReducers } from 'redux';

import authReducer from '../reducers/auth/auth';
import questionReducer from '../reducers/questions/questions';

const rootReducer = combineReducers({
    auth: authReducer,
    quest: questionReducer
})

export default rootReducer;