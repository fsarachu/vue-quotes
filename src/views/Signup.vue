<template>
    <section class="hero is-fullheight is-primary is-bold">
        <div class="hero-body">
            <div class="container">
                <div class="columns is-vcentered">

                    <div class="column is-4 is-offset-4">

                        <h1 class="title">Register an Account</h1>

                        <div class="box">

                            <div class="field">
                                <label class="label">Username</label>
                                <p class="control">
                                    <input class="input" type="text">
                                </p>
                            </div>

                            <div class="field">
                                <label class="label">Email</label>
                                <p class="control">
                                    <input class="input" type="email">
                                </p>
                            </div>

                            <div class="field">
                                <label class="label">Password</label>
                                <p class="control">
                                    <input class="input" type="password">
                                </p>
                            </div>

                            <div class="field">
                                <label class="label">Confirm Password</label>
                                <p class="control">
                                    <input class="input" type="password">
                                </p>
                            </div>

                            <hr>

                            <div class="field">
                                <p class="control">
                                    <button class="button is-primary is-large is-fullwidth">Register</button>
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