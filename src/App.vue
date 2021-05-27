<template>
  <v-app>
    <progress-linear />
    <router-view />
  </v-app>
</template>

<script>
  import ProgressLinear from './components/portfolio/ProgressLinear'

  export default {
    name: 'App',

    components: { ProgressLinear },

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
