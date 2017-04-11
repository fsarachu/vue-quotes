<template>
    <div id="app">
        <app-header></app-header>
        <router-view></router-view>
    </div>
</template>

<script>
    import store from './store/store';
    import AppHeader from './views/layouts/Header.vue';

    export default {
        store,
        components: {
            AppHeader
        }
    }
</script>
