<template lang="pug">
    .BtnCommunication
        template(v-for='(item, index) in items')
            v-btn(fab tile dark small :key='index')
                v-icon {{item.icon}}
        //v-btn( fab tile dark x-small)
            v-icon mdi-at
        //v-btn( fab tile dark x-small)
            v-icon mdi-telegram
        //v-btn( fab tile dark x-small)
            v-icon mdi-skype
        //v-btn( fab tile dark x-small)
            v-icon mdi-linkedin
        //v-btn( fab tile dark x-small)
            v-icon mdi-cellphone-iphone
        //v-btn( fab tile dark x-small)
            v-icon mdi-github-circle
        //v-btn( fab tile dark x-small)
            v-icon mdi-gitlab
        //v-btn( fab tile dark x-small)
            v-icon mdi-clock-digital
                //span {{ $t('portfolio.about.birthday') }}
                //span  e-mail: {{ $t('portfolio.about.e-mail') }}
                //span Telegram {{ $t('portfolio.about.telegram') }}
                //span Skype {{ $t('portfolio.about.skype') }}
                //span LinkedIn {{ $t('portfolio.about.linkedin') }}
</template>

<script>
  export default {
    name: 'BtnCommunication',
    // el: '',
    // render: {},
    props: [],
    data: () => ({
      items: [
        { icon: 'mdi-cake' },
        { icon: 'mdi-at' },
        { icon: 'mdi-cellphone-iphone' },
        { icon: 'mdi-telegram' },
        { icon: 'mdi-skype' },
        { icon: 'mdi-linkedin' },
        { icon: 'mdi-github-circle' },
        { icon: 'mdi-gitlab' },
        { icon: 'mdi-clock-digital' },
      ],
    }),
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
    .BtnCommunication {
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
