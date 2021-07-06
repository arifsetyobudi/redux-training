import * as actionTypes from "./actionTypes";

import instance from "../../api/AxiosInstance";
import jwt_decode from "jwt-decode";

export const axios = instance.apiInstance();

export const authSignIn = (email) => {
    return dispatch => {
        dispatch({
            type: actionTypes.AUTH_SIGN_IN_START,
        })

        return axios.post(`authentication/signin`, { email })
            .then(res => {
                const response = res.data;
                const tokenData = jwt_decode(response);
                localStorage.setItem("expiresIn", tokenData.exp * 1000);
                localStorage.setItem("token", response);

                dispatch({
                    type: actionTypes.AUTH_SIGN_IN_SUCCESS,
                    token: response
                })
            }).catch(function (error) {
                dispatch({
                    type: actionTypes.AUTH_SIGN_IN_FAIL,
                    error: error.response.data.Message
                })
            });
    };
};

export const authSignOut = () => {
    return dispatch => {
        Promise.resolve(
            dispatch({
                type: actionTypes.AUTH_SIGN_OUT,
            })
        )
    };
};

export const authCheckToken = () => {
    return dispatch => {
        return dispatch({
            type: actionTypes.AUTH_CHECK_TOKEN,
        });
    };
};