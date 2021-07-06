import * as actionTypes from "./actionTypes";

export const increment = () => {
    return dispatch => {
        dispatch({
            type: actionTypes.INCREMENT
        });
    };
};

export const decrement = () => {
    return dispatch => {
        dispatch({
            type: actionTypes.DECREMENT
        });
    };
};

export const incrementByAmount = (amount) => {
    return dispatch => {
        dispatch({
            type: actionTypes.INCREMENT_BY_AMOUNT,
            amount
        });
    };
};

export const decrementByAmount = (amount) => {
    return dispatch => {
        dispatch({
            type: actionTypes.DECREMENT_BY_AMOUNT,
            amount
        });
    };
};