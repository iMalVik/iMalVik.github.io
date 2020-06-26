<template lang="pug">
    .AppBar
        v-app-bar(app='', color='primary', dark='')
            .d-flex.align-center
                v-img.shrink.mr-2(alt='Vuetify Logo', contain='', src='https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png', transition='scale-transition', width='40')
                    v-img.shrink.mt-1.hidden-sm-and-down(alt='Vuetify Name', contain='', min-width='100', src='https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png', width='100')
            v-spacer
            btni18n
            v-spacer
            v-btn(href='https://github.com/vuetifyjs/vuetify/releases/latest', target='_blank', text='')
                span.mr-2 Latest Release
                v-icon mdi-open-in-new

</template>

<script>
    import Btni18n from './Btni18n'
    export default {
        name: 'AppBar',
        components: { Btni18n },
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
    .AppBar {
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
