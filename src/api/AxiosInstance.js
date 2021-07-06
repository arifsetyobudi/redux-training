import axios from "axios";
import instanceInterceptor from "./interceptorService";

const apiAxiosInstance = axios.create({
    baseURL: "http://localhost:7770/api/",
});

class instance {
    static apiInstance() {
        instanceInterceptor.responseInterceptor(apiAxiosInstance);
        instanceInterceptor.requestInterceptor(apiAxiosInstance);
        return apiAxiosInstance;
    }
}

export default instance;