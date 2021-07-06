import instance from "../AxiosInstance";

export const axios = instance.apiInstance();

class ItemAPI {
    static fetchItems() {
        return axios
            .get(`/items`)
            .then(res => {
                const response = res.data;
                return response;
            })
            .catch(err => {
                return err;
            });
    }

    static fetchItem(id) {
        return axios
            .get(`/items/${id}`)
            .then(res => {
                const response = res.data;
                return response;
            })
            .catch(err => {
                return err;
            });
    }

    static createItem(item) {
        return axios
            .post(`/items`, item)
            .then(res => {
                const response = res.data;
                return response;
            })
            .catch(err => {
                return err;
            });
    }

    static updateItem(id, item) {
        return axios
            .put(`/items/${id}`, item)
            .then(res => {
                const response = res.data;
                return response;
            })
            .catch(err => {
                return err;
            });
    }

    static deleteItem(id) {
        return axios
            .delete(`/items/${id}`)
            .then(res => {
                const response = res.data;
                return response;
            })
            .catch(err => {
                return err;
            });
    }
}

export default ItemAPI;