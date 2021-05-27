<template lang="pug">
    .Btni18n
        language-switcher(v-slot="{ links }")
            router-link.pa-1(:to="link.url" v-for="link in links" :key="link.langIndex")
                v-btn(:value="link.langIndex.toUpperCase()" :name='link.langIndex')
                    img(width='24' height='24' :src="require(`@/lang/icons/quadrangle/${link.langIndex}.svg`)" :alt='link.langIndex.toUpperCase()')
                    span.pl-2 {{ link.langName }}
</template>

<script>
  export default {
    name: 'Btni18n',
  }
</script>

<style scoped lang="scss">
    .Btni18n {
    }
</style>
