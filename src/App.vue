<template>
    <v-app>
        <app-bar/>
        <v-content>
            <v-container>
                <v-row class="text-center">
                    <v-col cols="12">
                        <div id="nav">
                            <language-switcher v-slot="{ links }">
                                <router-link :to="link.url" v-for="link in links" :key="link.langIndex">
                                    <span> {{ link.langName }}</span>
                                </router-link>
                            </language-switcher>
                            <div>{{ $t('hello') }}</div>
                            <localized-link to="/">Home</localized-link> |
                            <localized-link to="/about">About</localized-link>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
            <router-view/>
        </v-content>
    </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld'

    import AppBar from './components/AppBar'
    export default {
        name: 'App',

        components: {
            AppBar,
            // HelloWorld
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
