import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home.vue';
import Quotes from './views/quote/Quotes.vue';

Vue.use(VueRouter);

let routes = [
    {
        path: '',
        component: Home,
        name: 'home'
    },
    {
        path: '/quotes',
        component: Quotes,
        name: 'quotes'
    }
]

export default new VueRouter({
    routes,
    mode: 'history',
    linkActiveClass: 'is-active',
});