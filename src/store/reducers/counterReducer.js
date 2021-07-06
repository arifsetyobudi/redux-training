import * as actionTypes from "../actions/actionTypes";

import { updateState } from "../utils";

const initialState = {
    count: 0,
    sum: 0
};

const increment = (state, action) => {
    console.log('increment called');
    return updateState(state, { count: state.count + 1 });
};

const decrement = (state, action) => {
    return updateState(state, { count: state.count - 1 });
};

const incrementByAmount = (state, action) => {
    return updateState(state, { count: state.count + (action.amount * 1) });
};

const decrementByAmount = (state, action) => {
    return updateState(state, { count: state.count - (action.amount * 1) });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return increment(state, action);            
        case actionTypes.DECREMENT:
            return decrement(state, action);
        case actionTypes.INCREMENT_BY_AMOUNT:
            return incrementByAmount(state, action);
        case actionTypes.DECREMENT_BY_AMOUNT:
            return decrementByAmount(state, action);
        default:
            return state;
    }
};

export default reducer;