<template lang="pug">
    .Btni18nHexagon
        language-switcher(v-slot="{ links }")
            router-link.pa-1(:to="link.url" v-for="link in links" :key="link.langIndex")
                img(width='24' height='24' :src="require(`@/lang/icons/hexagon/${link.langIndex}.svg`)" :alt='link.langIndex.toUpperCase()')
</template>

<script>
  export default {
    name: 'Btni18nHexagon',
    // el: '',
    // render: {},
    props: [],
    data: () => ({  }),
    watch: {},
    computed: {},
    methods: {},
    beforeCreate: function () {},
    created: function () {},
    beforeMount: function () {},
    mounted: function () {},
    beforeUpdate: function () {},
    updated: function () {},
    beforeDestroy: function () {},
    destroyed: function () {},
  }
</script>

<style scoped lang="scss">
    .Btni18nHexagon {
        // Vars

        // Support

        // Module
        & {
            //
        }

        // Facets

        // States
    }
</style>
