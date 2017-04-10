<template>
    <div id="app">
        <h1>Quotes</h1>
        <ul>
            <li v-for="quote in quotes">{{ quote.id }}: {{ quote.content }}</li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'app',
        data () {
            return {
                quotes: {}
            }
        },
        mounted() {
            axios.get('http://vue-laravel.dev/api/quotes')
                .then(response => {
                    this.quotes = response.data.quotes;
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
</script>
