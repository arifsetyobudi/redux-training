import * as actionTypes from "./actionTypes";

export const createItem = (item) => {
    return dispatch => {
        dispatch({
            type: actionTypes.CREATE_ITEM,
            item: item
        })
    };
};

export const updateItem = (item) => {
    return dispatch => {
        dispatch({
            type: actionTypes.UPDATE_ITEM,
            item
        })
    };
};

export const deleteItem = (id) => {
    return dispatch => {
        dispatch({
            type: actionTypes.DELETE_ITEM,
            id
        })
    };
};

export const viewItem = (id) => {
    return dispatch => {
        Promise.resolve(
            dispatch({
                type: actionTypes.VIEW_ITEM,
                id: id
            }));
    };
};