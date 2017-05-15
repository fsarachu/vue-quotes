<template>
    <article class="media box">
        <div class="media-content">
            <div class="content">
                <p>
                    <strong>{{quote.user.name}}</strong>
                    <small><app-time-ago :since="quote.created_at"></app-time-ago></small>
                    <br>
                    {{quote.content}}
                </p>
            </div>
        </div>
        <!--<div class="media-right">-->
            <!--<button class="delete"></button>-->
        <!--</div>-->
    </article>
</template>

<script>
    import AppTimeAgo from './TimeAgo.vue';

    export default {
        components: {
            AppTimeAgo,
        },
        props: {
            quote: {
                type: Object,
                required: true,
            },
        }
    }
</script>