import Vue from 'vue';
import VueRouter from 'vue-router';
import Header from './views/layouts/Header.vue';
import Home from './views/Home.vue';
import Quotes from './views/Quotes.vue';
import Signup from './views/Signup.vue';
import Login from './views/Signin.vue';

Vue.use(VueRouter);

let routes = [
    {
        path: '',
        components: {
            'default': Home,
            'header-top': Header,
        },
        name: 'home'
    },
    {
        path: '/quotes',
        components: {
            'default': Quotes,
            'header-top': Header,
        },
        name: 'quotes'
    },
    {
        path: '/signup',
        component: Signup,
        name: 'signup'
    },
    {
        path: '/login',
        component: Login,
        name: 'login'
    }
];

export default new VueRouter({
    routes,
    mode: 'history',
    linkActiveClass: 'is-active',
});