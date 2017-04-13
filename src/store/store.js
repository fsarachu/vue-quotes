import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

Vue.use(Vuex);

export default new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        quotes: [],
        token: null,
        intendedUrl: null,
    },
    getters: {
        quotes(state) {
            return state.quotes;
        },
        token(state) {
            return state.token;
        },
        decodedToken(state) {
            return (state.token) ? jwtDecode(state.token) : null;
        },
        intendedUrl(state){
            return (state.intendedUrl) ? state.intendedUrl : '/';
        },
        isAuthenticated(state) {
            return !!(state.token);
        }
    },
    mutations: {
        loadQuotes(state, payload) {
            state.quotes = payload;
        },
        addQuote(state, payload) {
            state.quotes.unshift(payload);
        },
        setToken(state, payload) {
            state.token = payload;
        },
        setIntendedUrl(state, payload) {
            state.intendedUrl = payload;
        }
    },
    actions: {
        loadQuotes(context) {
            axios.get('http://vue-laravel-back.dev/api/quotes')
                .then(({data}) => context.commit('loadQuotes', data.quotes))
                .catch(error => console.log(error));
        },
        addQuote(context, payload) {
            axios.post('http://vue-laravel-back.dev/api/quotes', {content: payload})
                .then(({data}) => context.commit('addQuote', data.quote))
                .catch(error => console.log(error));
        },
        setToken(context, payload) {
            context.commit('setToken', payload);
        },
        setIntendedUrl(context, payload) {
            context.commit('setIntendedUrl', payload);
        }
    }
});