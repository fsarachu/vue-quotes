import Axios from "axios";
import router from "./router";
import store from "../../store/store";

// Set default headers
Axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
Axios.defaults.baseURL = 'http://api.vue-quotes.fsarachu.com/';

// Inject JWT token auth header
Axios.interceptors.request.use(
    config => {
        let token = store.getters.token;

        if (token) {
            config.headers = {Authorization: `Bearer ${token}`};
        }

        return config;
    },
    error => Promise.reject(error)
);

// Refresh JWT token on each response or logout user if 401 response is received
Axios.interceptors.response.use(
    response => {
        if (response.headers['authorization']) {
            let newToken = response.headers['authorization'].split(' ')[1];
            store.dispatch('setToken', newToken);
        }

        return response;
    },
    error => {
        if (error.response.status === 401) {
            store.dispatch('logout', null);
            router.push({name: 'login'});
        }

        Promise.reject(error);
    }
);

export default Axios;