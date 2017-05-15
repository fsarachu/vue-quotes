<template>
    <nav class="nav has-shadow">
        <div class="container">

            <div class="nav-left">
                <router-link :to="{name: 'home'}" class="nav-item is-tab" exact>Home</router-link>
                <router-link :to="{name: 'quotes'}" class="nav-item is-tab">Quotes</router-link>
            </div>

            <div v-if="isAuthenticated" class="nav-right">
                <a @click.prevent="logout" class="nav-item is-tab">Log out</a>
            </div>

        </div>
    </nav>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';

    export default {
        computed: {
            ...mapGetters(['isAuthenticated']),
        },
        methods: {
            ...mapActions(['logout']),
        }
    }
</script>