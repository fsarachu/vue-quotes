<template>
    <section class="section">
        <div class="container">

            <h3 class="title is-4 has-text-centered">Add a Quote</h3>

            <div class="columns">
                <div class="column is-half is-offset-one-quarter">
                    <app-new-quote></app-new-quote>
                </div>
            </div>

            <hr>

            <template v-if="quotes.length">
                <h3 class="title is-4 has-text-centered">Last Quotes</h3>

                <div class="columns is-multiline">

                    <div v-for="quote in quotes" class="column is-one-third">
                        <app-quote>{{ quote.content }}</app-quote>
                    </div>

                </div>
            </template>

        </div>
    </section>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';
    import AppNewQuote from '../components/NewQuote.vue';
    import AppQuote from '../components/Quote.vue';

    export default {
        components: {
            AppQuote,
            AppNewQuote,
        },
        computed: {
            ...mapGetters(['quotes']),
        },
        methods: {
            ...mapActions(['loadQuotes']),
        },
        mounted() {
            this.loadQuotes();
        }
    };
</script>