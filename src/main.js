import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router';

// axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

Vue.prototype.$axios = axios;

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
