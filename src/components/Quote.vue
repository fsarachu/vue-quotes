<template>
    <article class="media box">
        <div class="media-content">
            <div class="content">
                <p>
                    <strong>{{quote.user.name}}</strong>
                    <small>some time ago</small>
                    <br>
                    {{quote.content}}
                </p>
            </div>
        </div>
        <div class="media-right">
            <button class="delete"></button>
        </div>
    </article>
</template>

<script>
    export default {
        props: {
            quote: {
                type: Object,
                required: true,
            },
        }
    }
</script>