<template>
    <div id="app">
        <router-view name="header-top"></router-view>
        <router-view></router-view>
    </div>
</template>

<script>
    import store from './store/store';

    export default {
        store,
    };
</script>
