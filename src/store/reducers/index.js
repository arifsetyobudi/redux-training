import authReducer from './authReducer';
import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import itemReducer from './itemReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    item: itemReducer,
    auth: authReducer,
});

export default rootReducer;