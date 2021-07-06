import * as actionTypes from "../actions/actionTypes";

import { updateState } from "../utils";

const initialState = {
    itemsLoaded: false,
    loading: false,
    error: null,
    items: [],
    item: null
};

const fetchItemsStart = (state, action) => {
    return updateState(state, { items: [], itemsLoaded: false, loading: true, error: null });
}

const fetchItemsSuccess = (state, action) => {
    return updateState(state, { items: [...action.items], itemsLoaded: true, loading: false, error: null });
}

const fetchItemsFail = (state, action) => {
    return updateState(state, { items: [], itemsLoaded: false, loading: false, error: action.error });
}

const viewItem = (state, action) => {
    const item = state.items.find(it => it.id == action.id);
    console.log('item', item);
    return updateState(state, { item });
}

const fetchItemStart = (state, action) => {
    return updateState(state, { item: null, loading: true, error: null });
}

const fetchItemSuccess = (state, action) => {
    return updateState(state, { item: action.item, loading: false, error: null });
}

const fetchItemFail = (state, action) => {
    return updateState(state, { loading: false, error: action.error });
}

const createItemStart = (state, action) => {
    return updateState(state, { loading: true, error: null });
}

const createItemSuccess = (state, action) => {
    return updateState(state, { loading: false, error: null, items: [...state.items, action.item] });
}

const createItemFail = (state, action) => {
    return updateState(state, { loading: false, error: action.error });
}

const updateItemStart = (state, action) => {
    return updateState(state, { loading: true, error: null });
}

const updateItemSuccess = (state, action) => {
    const items = state.items;

    const item = items.find(it => it.id == action.item.id);
    if (item) {
        item.itemName = action.item.itemName;
        item.price = action.item.price;
        item.unitOfMeasure = action.item.unitOfMeasure;
    }

    return updateState(state, { items: [...items], loading: false, error: null });
}

const updateItemFail = (state, action) => {
    return updateState(state, { loading: false, error: action.error });
}

const deleteItemStart = (state, action) => {
    return updateState(state, { loading: true, error: null });
}

const deleteItemSuccess = (state, action) => {
    return updateState(state, { items: [...state.items.filter(it => it.id != action.id)], loading: false, error: null });
}

const deleteItemFail = (state, action) => {
    return updateState(state, { loading: false, error: action.error });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ITEMS_START:
            return fetchItemsStart(state, action);
        case actionTypes.FETCH_ITEMS_SUCCESS:
            return fetchItemsSuccess(state, action);
        case actionTypes.FETCH_ITEMS_FAIL:
            return fetchItemsFail(state, action);
            
        case actionTypes.VIEW_ITEM:
            return viewItem(state, action);

        case actionTypes.FETCH_ITEM_START:
            return fetchItemStart(state, action);
        case actionTypes.FETCH_ITEM_SUCCESS:
            return fetchItemSuccess(state, action);
        case actionTypes.FETCH_ITEM_FAIL:
            return fetchItemFail(state, action);

        case actionTypes.CREATE_ITEM_START:
            return createItemStart(state, action);
        case actionTypes.CREATE_ITEM_SUCCESS:
            return createItemSuccess(state, action);
        case actionTypes.CREATE_ITEM_FAIL:
            return createItemFail(state, action);

        case actionTypes.UPDATE_ITEM_START:
            return updateItemStart(state, action);
        case actionTypes.UPDATE_ITEM_SUCCESS:
            return updateItemSuccess(state, action);
        case actionTypes.UPDATE_ITEM_FAIL:
            return updateItemFail(state, action);

        case actionTypes.DELETE_ITEM_START:
            return deleteItemStart(state, action);
        case actionTypes.DELETE_ITEM_SUCCESS:
            return deleteItemSuccess(state, action);
        case actionTypes.DELETE_ITEM_FAIL:
            return deleteItemFail(state, action);

        default:
            return state;
    }
};

export default reducer;