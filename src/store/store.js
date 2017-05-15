import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

Vue.use(Vuex);

export default new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        token: null,
        intendedUrl: null,
        quotes: [],
        isSubmittingQuote: false,
    },
    getters: {
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
        },
        quotes(state) {
            return state.quotes;
        },
        isSubmittingQuote(state) {
            return state.isSubmittingQuote;
        }
    },
    mutations: {
        setToken(state, payload) {
            state.token = payload;
        },
        setIntendedUrl(state, payload) {
            state.intendedUrl = payload;
        },
        loadQuotes(state, payload) {
            state.quotes = payload;
        },
        addQuote(state, payload) {
            state.quotes.unshift(payload);
        },
        setIsSubmittingQuote(state, payload){
            state.isSubmittingQuote = payload;
        },
    },
    actions: {
        setToken(context, payload) {
            context.commit('setToken', payload);
        },
        logout(context, payload) {
            context.commit('setToken', null);
        },
        setIntendedUrl(context, payload) {
            context.commit('setIntendedUrl', payload);
        },
        loadQuotes(context) {
            axios.get('/quotes')
                .then(({data}) => context.commit('loadQuotes', data.quotes))
                .catch(error => console.log(error));
        },
        addQuote(context, payload) {
            axios.post('/quotes', {content: payload.content})
                .then(({data}) => {
                    context.dispatch('setIsSubmittingQuote', false);
                    context.commit('addQuote', data.quote);
                })
                .catch(error => {
                    context.dispatch('setIsSubmittingQuote', false);
                    console.log(error);
                });
        },
        setIsSubmittingQuote(context, payload){
            context.commit('setIsSubmittingQuote', payload);
        },
    }
});