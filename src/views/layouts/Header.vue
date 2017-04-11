<template>
    <nav class="nav has-shadow">
        <div class="container">

            <div class="nav-center">
                <router-link :to="{name: 'home'}" class="nav-item is-tab" exact>Home</router-link>
                <router-link :to="{name: 'quotes'}" class="nav-item is-tab">Quotes</router-link>
            </div>

        </div>
    </nav>
</template>