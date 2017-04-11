<template>
    <form @submit.prevent="onSubmit">
        <div class="field has-addons">
            <p class="control is-expanded">
                <input v-model="quoteContent" class="input" type="text" placeholder="Enter an inspiring quote">
            </p>
            <p class="control">
                <button class="button is-primary">Submit</button>
            </p>
        </div>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                quoteContent: ''
            }
        },
        methods: {
            onSubmit() {
                this.$emit('quoteAdded', quoteContent);
            }
        }
    }
</script>