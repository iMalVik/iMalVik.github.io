<template>
    <v-app>
        <router-view />
    </v-app>
</template>

<script>

    export default {
        name: 'App',

        components: {
        },

        data: () => ({
            //
        }),
    }
</script>

<style>
    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
