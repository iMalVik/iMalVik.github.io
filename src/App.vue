<template>
  <div id="app">
    <language-switcher v-slot="{ links }">
      <router-link :to="link.url" v-for="link in links" :key="link.langIndex">
        <span> {{ link.langName }}</span>
      </router-link>
    </language-switcher>
    <div>{{ $t('hello') }}</div>
    <div id="nav">
      <localized-link to="/">Home</localized-link> |
      <localized-link to="/about">{{ $t('about.name') }}</localized-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

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
