// Packages
import VueRouter from 'vue-router';
import store from '../../store/store';

// View components
import Header from '../../views/layouts/Header.vue';
import Home from '../../views/Home.vue';
import Quotes from '../../views/Quotes.vue';
import Signup from '../../views/Signup.vue';
import Login from '../../views/Signin.vue';

// Define routes
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

// Create router
const router = new VueRouter({
    routes,
    mode: 'history',
    linkActiveClass: 'is-active',
});

// Define global guards
router.beforeEach((to, from, next) => {

    if (!store.getters.token && to.name !== 'login') {
        store.dispatch('setIntendedUrl', to.path);
        next({name: 'login'});
    }

    next();
});

export default router;