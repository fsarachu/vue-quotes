import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        quotes: []
    },
    getters: {
        quotes: state => {
            return state.quotes;
        },
        getQuoteById: (state, getters) => (id) => {
            return state.quotes.find(quote => quote.id === id);
        }
    },
    mutations: {
        loadQuotes: (state, payload) => {
            state.quotes = payload;
        },
        addQuote: (state, payload) => {
            state.quotes.unshift(payload);
        },
    },
    actions: {
        loadQuotes: context => {
            axios.get('http://vue-laravel-back.dev/api/quotes')
                .then(({data}) => context.commit('loadQuotes', data.quotes))
                .catch(error => console.log(error));
        },
        addQuote: (context, payload) => {
            axios.post('http://vue-laravel-back.dev/api/quotes', {
                content: payload
            })
                .then(({data}) => context.commit('addQuote', data.quote))
                .catch(error => console.log(error));
        },
    }
});