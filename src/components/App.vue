<template>
    <div id="app">
        <router-view name="header-top"></router-view>

        <transition name="fade" mode="out-in" appear>
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import store from '../store/store';

    export default {
        store,
    };
</script>

<style lang="sass">
    @import "../../node_modules/bulma/bulma"
</style>

<style>
    .fade-enter {
        opacity: 0;
    }
    .fade-enter-active {
        transition: opacity .3s ease-out;
    }
    .fade-leave-active {
        opacity: 0;
        transition: opacity .1s ease-out;
    }
</style>
