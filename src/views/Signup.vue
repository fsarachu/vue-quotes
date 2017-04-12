<template>
    <section class="hero is-fullheight is-dark">
        <div class="hero-body">
            <div class="container">
                <div class="columns is-vcentered">

                    <div class="column is-8-tablet is-offset-2-tablet is-4-desktop is-offset-4-desktop">

                        <h1 class="title has-text-centered">Sign Up</h1>

                        <div class="box">

                            <div class="field">
                                <label for="username" class="label">Username</label>
                                <p class="control">
                                    <input v-model="name" id="username" class="input" type="text">
                                </p>
                            </div>

                            <div class="field">
                                <label for="email" class="label">Email</label>
                                <p class="control">
                                    <input v-model="email" id="email" class="input" type="email">
                                </p>
                            </div>

                            <div class="field">
                                <label for="password" class="label">Password</label>
                                <p class="control">
                                    <input v-model="password" id="password" class="input" type="password">
                                </p>
                            </div>

                            <div class="field">
                                <label for="password_confirmation" class="label">Confirm Password</label>
                                <p class="control">
                                    <input v-model="password_confirmation" id="password_confirmation" class="input"
                                           type="password">
                                </p>
                            </div>

                            <div class="field">
                                <p class="control">
                                    <button class="button is-primary is-medium is-fullwidth">Register</button>
                                </p>
                            </div>

                        </div>

                        <p class="has-text-centered">
                            Already have an account? <router-link :to="{name: 'login'}">Login</router-link>
                        </p>

                    </div>

                </div>
            </div>
        </div>

    </section>
</template>

<script>
    export default {
        data() {
            return {
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
            };
        }
    };
</script>