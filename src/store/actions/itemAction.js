import * as actionTypes from "./actionTypes";

import ItemAPI from "../../api/services/ItemService";

export const fetchItemsStart = () => {
    return {
        type: actionTypes.FETCH_ITEMS_START,
    };
};

export const fetchItemsSuccess = (items) => {
    return {
        type: actionTypes.FETCH_ITEMS_SUCCESS,
        items
    };
};

export const fetchItemsFail = error => {
    return {
        type: actionTypes.FETCH_ITEMS_FAIL,
        error: error,
    };
};

export const fetchItems = () => {
    return dispatch => {
        dispatch(fetchItemsStart());

        return ItemAPI.fetchItems()
            .then(res => {
                dispatch(fetchItemsSuccess(res));
            })
            .catch(err => {
                dispatch(fetchItemsFail(err));
            });
    };
};

export const viewItem = (id) => {
    return dispatch => {
        dispatch({
            type: actionTypes.VIEW_ITEM,
            id: id
        })
    };
};

export const fetchItemStart = () => {
    return {
        type: actionTypes.FETCH_ITEM_START,
    };
};

export const fetchItemSuccess = (item) => {
    return {
        type: actionTypes.FETCH_ITEM_SUCCESS,
        item
    };
};

export const fetchItemFail = error => {
    return {
        type: actionTypes.FETCH_ITEM_FAIL,
        error: error,
    };
};

export const fetchItem = (id) => {
    return dispatch => {
        dispatch(fetchItemStart());

        return ItemAPI.fetchItem(id)
            .then(res => {
                dispatch(fetchItemSuccess(res));
            })
            .catch(err => {
                dispatch(fetchItemFail(err));
            });
    };
};

export const createItemStart = () => {
    return {
        type: actionTypes.CREATE_ITEM_START,
    };
};

export const createItemSuccess = (item) => {
    return {
        type: actionTypes.CREATE_ITEM_SUCCESS,
        item
    };
};

export const createItemFail = error => {
    return {
        type: actionTypes.CREATE_ITEM_FAIL,
        error: error,
    };
};

export const createItem = (item) => {
    return dispatch => {
        dispatch(createItemStart());

        return ItemAPI.createItem(item)
            .then(res => {
                dispatch(createItemSuccess(res));
            })
            .catch(err => {
                dispatch(createItemFail(err));
            });
    };
};

export const updateItemStart = () => {
    return {
        type: actionTypes.UPDATE_ITEM_START,
    };
};

export const updateItemSuccess = (item) => {
    return {
        type: actionTypes.UPDATE_ITEM_SUCCESS,
        item
    };
};

export const updateItemFail = error => {
    return {
        type: actionTypes.UPDATE_ITEM_FAIL,
        error: error,
    };
};

export const updateItem = (id, item) => {
    return dispatch => {
        dispatch(updateItemStart());

        return ItemAPI.updateItem(id, item)
            .then(res => {
                dispatch(updateItemSuccess(res));
            })
            .catch(err => {
                dispatch(updateItemFail(err));
            });
    };
};

export const deleteItemStart = () => {
    return {
        type: actionTypes.DELETE_ITEM_START,
    };
};

export const deleteItemSuccess = (id) => {
    return {
        type: actionTypes.DELETE_ITEM_SUCCESS,
        id
    };
};

export const deleteItemFail = error => {
    return {
        type: actionTypes.DELETE_ITEM_FAIL,
        error: error,
    };
};

export const deleteItem = (id) => {
    return dispatch => {
        dispatch(deleteItemStart());

        return ItemAPI.deleteItem(id)
            .then(res => {
                dispatch(deleteItemSuccess(id));
            })
            .catch(err => {
                dispatch(deleteItemFail(err));
            });
    };
};