import * as actionTypes from "../actions/actionTypes";

import { updateState } from "../utils";

const initialState = {
    items: [{
        id: Math.random() * 1000000,
        itemName: "Coffe",
        price: 5000,
        unitOfMeasure: "pcs"
    }],
    item: null
};

const createItem = (state, action) => {
    return updateState(state, { items: [...state.items, action.item] });
}

const updateItem = (state, action) => {
    const items = state.items;

    const item = items.find(it => it.id == action.item.id);
    if (item) {
        item.itemName = action.item.itemName;
        item.price = action.item.price;
        item.unitOfMeasure = action.item.unitOfMeasure;
    }

    return updateState(state, { items: [...items] });
}

const deleteItem = (state, action) => {
    return updateState(state, { items: [...state.items.filter(it => it.id != action.id)] });
}

const viewItem = (state, action) => {
    const item = state.items.find(it => it.id == action.id);
    console.log('item', item);
    return updateState(state, { item });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_ITEM:
            return createItem(state, action);
        case actionTypes.UPDATE_ITEM:
            return updateItem(state, action);
        case actionTypes.DELETE_ITEM:
            return deleteItem(state, action);
        case actionTypes.VIEW_ITEM:
            return viewItem(state, action);
        default:
            return state;
    }
};

export default reducer;