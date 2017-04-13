// Packages
import VueRouter from 'vue-router';
import store from '../../store/store';

// View components
import Header from '../../views/layouts/Header.vue';
import Home from '../../views/Home.vue';
import Quotes from '../../views/Quotes.vue';
import Signup from '../../views/Signup.vue';
import Login from '../../views/Signin.vue';

// Define middleware
let middleware = {
    requestAuthentication(to, from, next) {
        let publicRoutes = ['login', 'signup'];

        if (!store.getters.isAuthenticated && !publicRoutes.includes(to.name)) {
            store.dispatch('setIntendedUrl', to.path);
            next({name: 'login'});
        } else {
            next();
        }
    },

    redirectIfAuthenticated(to, from, next) {
        if(store.getters.isAuthenticated) {
            next(store.getters.intendedUrl);
        } else {
            next();
        }
    }
};

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
        name: 'signup',
        beforeEnter: middleware.redirectIfAuthenticated,
    },
    {
        path: '/login',
        component: Login,
        name: 'login',
        beforeEnter: middleware.redirectIfAuthenticated,
    },
    {
        path: '*',
        redirect: {
            name: 'home'
        }
    }
];

// Create router
const router = new VueRouter({
    routes,
    mode: 'history',
    linkActiveClass: 'is-active',
});

// Protect all routes except public ones
router.beforeEach(middleware.requestAuthentication);

export default router;