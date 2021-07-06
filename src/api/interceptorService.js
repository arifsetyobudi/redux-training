import {
    authSignOut
} from "../store/actions/authAction";
import axiosInstance from "axios";
import store from "../store/store";

const CancelToken = axiosInstance.CancelToken;
let cancel;


const numbers = /[0-9]/g;

/** Success interceptor handler */
const successHandler = response => {
    return response;
};

/** Request Handler to all axios connection
 *  Could put header authorization
 */
const requestHandler = request => {
    // start initial execution time on meta
    request.meta = request.meta || {};
    request.meta.requestStartedAt = new Date().getTime();
    // set cancel token request
    request.cancelToken = new CancelToken(function executor(c) {
        cancel = c;
    });

    //const token = null; // store.getState().auth.token;
    const token = localStorage.getItem('token');

    if (token) {
        request.headers["Authorization"] = `Bearer ${token}`;
        request.headers["Content-Type"] = "application/json";
        // request.headers["Access-Control-Allow-Headers"] =
        //   "Origin, X-Requested-With, Content-Type, Accept";
        return request;
    } else {
        request.headers["Content-Type"] = "application/json";
        return request;
    }
};

const instanceInterceptor = {
    responseInterceptor: instance => {
        /** Enabling response Interceptors handler */
        instance.interceptors.response.use(
            response => successHandler(response),
            error => {
                if (error.response.status === 401) {
                    alert("token is unauthorized")
                    // const token = localStorage.getItem('token');
                    // localStorage.clear();
                    // window.location.href = "/login";

                    return store.dispatch(authSignOut());
                } else if (error.response.status === 404) {
                    throw new Error(`${error.config.url} not found`);
                }
                throw error;
            }
        );
    },
    requestInterceptor: instance => {
        instance.interceptors.request.use(request => requestHandler(request));
    },
};

export default instanceInterceptor;
