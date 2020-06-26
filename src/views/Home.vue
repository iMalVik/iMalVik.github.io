<template>
    <div>
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
                            |
                            <localized-link to="/portfolio">Portfolio</localized-link>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
            <div class="home">
                <img alt="Vue logo" src="../assets/logo.png">
                <HelloWorld msg="Welcome to Your Vue.js App" />
            </div>
            <hello-vuetify />
        </v-main>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld   from '@/components/HelloWorld.vue'
    import HelloVuetify from '../components/HelloVuetify'
    import AppBar       from '../components/AppBar'

    export default {
        name: 'Home',
        components: {
            AppBar,
            HelloVuetify,
            HelloWorld,
        },
    }
</script>
<style scoped lang='scss'>
    .home {
        text-align: center;
    }
</style>
