import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        quotes: []
    },
    getters: {
        getQuotes: state => {
            return state.quotes;
        },
        getQuoteById: (state, getters) => (id) => {
            return state.quotes.find(quote => quote.id === id);
        }
    },
    mutations: {
        addQuote: (state, payload) => {
            state.quotes.unshift(payload);
        },
    },
    actions: {
        addQuote: (context, payload) => {
            context.commit('addQuote', payload);
        },
    }
});