<template>
    <form @submit.prevent="onSubmit">
        <div class="field has-addons">
            <p class="control is-expanded">
                <input v-model="quoteContent" class="input" type="text" placeholder="Enter an inspiring quote" autofocus>
            </p>
            <p class="control">
                <button class="button is-primary">Submit</button>
            </p>
        </div>
    </form>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        data() {
            return {
                quoteContent: ''
            }
        },
        methods: {
            ...mapActions(['addQuote']),
            onSubmit() {
                this.addQuote(this.quoteContent);
                this.quoteContent = '';
            }
        }
    };
</script>