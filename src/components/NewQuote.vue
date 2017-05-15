<template>
    <form @submit.prevent="onSubmit">
        <div class="field has-addons">
            <p class="control is-expanded">
                <input v-model="quote.content" :disabled="isSubmittingQuote" class="input" type="text" placeholder="Enter an inspiring quote"
                       autofocus>
            </p>
            <p class="control">
                <button :class="{'is-loading': isSubmittingQuote}" class="button is-primary">Submit</button>
            </p>
        </div>
    </form>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';

    export default {
        data() {
            return {
                quote: {
                    content: '',
                }
            };
        },
        computed: {
            ...mapGetters(['isSubmittingQuote','decodedToken']),
        },
        methods: {
            ...mapActions(['addQuote', 'setIsSubmittingQuote']),
            onSubmit() {
                this.setIsSubmittingQuote(true);
                this.addQuote(this.quote);
                this.quote.content = '';
            },
        }
    };
</script>