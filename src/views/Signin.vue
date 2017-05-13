<template>
    <section class="hero is-fullheight is-dark">
        <div class="hero-body">
            <div class="container">
                <div class="columns is-vcentered">

                    <div class="column is-8-tablet is-offset-2-tablet is-4-desktop is-offset-4-desktop">

                        <h1 class="title has-text-centered">Login</h1>

                        <form @submit.prevent="onSubmit" class="box">

                            <div class="field">
                                <label for="username" class="label">Username</label>
                                <p class="control">
                                    <input v-model="name" id="username" class="input" type="text" autofocus>
                                </p>
                            </div>

                            <div class="field">
                                <label for="password" class="label">Password</label>
                                <p class="control">
                                    <input v-model="password" id="password" class="input" type="password">
                                </p>
                            </div>

                            <div class="field">
                                <p class="control">
                                    <button class="button is-primary is-medium is-fullwidth">Login</button>
                                </p>
                            </div>

                        </form>

                        <p class="has-text-centered">
                            No account yet?
                            <router-link :to="{name: 'signup'}">Sign up</router-link>
                        </p>

                    </div>

                </div>
            </div>
        </div>

    </section>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';

    export default {
        data() {
            return {
                name: '',
                password: '',
            };
        },
        computed: {
            ...mapGetters(['intendedUrl']),
        },
        methods: {
            ...mapActions(['setToken']),

            onSubmit() {
                this.axios.post('/users/signin', {
                    name: this.name,
                    password: this.password,
                })
                    .then(response => {
                        this.setToken(response.data.token);
                        this.$router.push(this.intendedUrl);
                    })
                    .catch(error => console.dir(error.response.data))
            }
        }

    };
</script>