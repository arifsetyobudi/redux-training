import * as actionTypes from "../actions/actionTypes";

import { updateState } from "../utils";

const initialState = {
    token: null,
    loading: false,
    error: null,
};

const authSignInStart = (state, action) => {
    return updateState(state, { loading: true, error: null });
}

const authSignInSuccess = (state, action) => {
    return updateState(state, { token: action.token, loading: false, error: null });
}

const authSignInFail = (state, action) => {
    return updateState(state, { token: null, loading: false, error: action.error });
}

const authCheckToken = (state, action) => {
    const token = localStorage.getItem('token');
    console.log('token', token);
    if (token) {
        return updateState(state, { token });
    } else {
        return updateState(state, { token: null });
    }
}

const authSignOut = (state, action) => {
    localStorage.clear();
    return updateState(state, { token: null });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_SIGN_IN_START:
            return authSignInStart(state, action);
        case actionTypes.AUTH_SIGN_IN_SUCCESS:
            return authSignInSuccess(state, action);
        case actionTypes.AUTH_SIGN_IN_FAIL:
            return authSignInFail(state, action);
        case actionTypes.AUTH_CHECK_TOKEN:
            return authCheckToken(state, action);
        case actionTypes.AUTH_SIGN_OUT:
            return authSignOut(state, action);
        default:
            return state;
    }
};

export default reducer;