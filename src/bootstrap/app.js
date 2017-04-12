// Packages
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';

// Bootstrap modules
import axios from './modules/axios';
import router from  './modules/router';

// App container
import AppComponent from '../components/App.vue';

// Main application class
class App {
    constructor(el = '#app') {
        // Register plugins
        Vue.use(VueRouter);
        Vue.use(VueAxios, axios);

        // Create Vue instance
        this._app = new Vue({
            el,
            router,
            render: h => h(AppComponent)
        });
    }
}

export default App;