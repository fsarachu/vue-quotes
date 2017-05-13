import Axios from 'axios';
import store from '../../store/store';

// Set default headers
Axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
Axios.defaults.baseURL = 'http://api.vue-laravel.dev/';

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

export default Axios;