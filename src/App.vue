<template>
    <v-app>
        <app-bar />
        <v-main>
            <v-container>
                <v-row class="text-center">
                    <v-col cols="12">
                        <div id="nav">
                            <h1>{{ $t('hello') }}</h1>
                            <localized-link to="/">Home</localized-link>
                            |
                            <localized-link to="/about">About</localized-link>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
            <router-view />
        </v-main>
    </v-app>
</template>

<script>
    import AppBar from './components/AppBar'

    export default {
        name: 'App',

        components: {
            AppBar,
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
