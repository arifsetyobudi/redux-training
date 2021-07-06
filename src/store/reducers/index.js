import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import itemReducer from './itemReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    item: itemReducer,
});

export default rootReducer;