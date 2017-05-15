<template>
    <span>{{timeAgo}}</span>
</template>

<script>
    import moment from 'moment';

    export default {
        mounted() {
            this.updateTime();
            setInterval(this.updateTime, this.refreshRate);
        },
        props: {
            since: {
                type: String,
                required: true,
            },
            refresh: {
                type: Number,
                default: 30,
            }
        },
        data() {
            return {
                timeAgo: '',
            }
        },
        computed: {
            refreshRate() {
                return this.refresh * 1000;
            }
        },
        methods: {
            updateTime(){
                this.timeAgo = moment.utc(this.since).fromNow();
            }
        }
    }
</script>