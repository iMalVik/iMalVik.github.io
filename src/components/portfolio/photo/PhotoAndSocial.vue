<template lang="pug">
    .PhotoAndSocial
        v-row.mx-0
            v-col.py-0.px-0
                v-row.mx-0(style="width:128px")
                    v-col.py-0.px-0(cols=12)
                        v-avatar.ma-0(width=128 height=160 tile)
                            v-img.foto(src='@/assets/img/foto.jpg')
                    v-col.py-0.px-0(cols=12)
                        template(v-for='(item, index) in items2')
                            v-btn(fab tile dark x-small :key='index' v-style='(index = 3) ? {color: red} : {color: green}' )
                                v-icon {{item.icon}}
            v-col.py-0.px-0
                v-row.mx-0
                    v-col.pa-0(cols='12').d-flex.flex-column
                        template(v-for='(item, index) in items')
                            v-btn(fab tile dark x-small :key='index' v-style='(index = 3) ? {color: red} : {color: green}' )
                                v-icon {{item.icon}}
</template>

<script>
  export default {
    name: 'Photo',
    // el: '',
    // render: {},
    props: [],
    data: () => ({
      items: [
        { icon: 'mdi-gitlab' },
        { icon: 'mdi-github-circle' },
        { icon: 'mdi-telegram' },
        { icon: 'mdi-skype' },
        { icon: 'mdi-linkedin' },
        { icon: 'mdi-clock-digital' },
      ],
      items2: [
        { icon: 'mdi-cake' },
        { icon: 'mdi-at' },
        { icon: 'mdi-cellphone-iphone' },
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
    .Photo {
        h1, h4 {
            text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;
        }
        // Vars

        // Support

        // Module
        & {
            //
        }

        // Facets

        // States
    }
    .foto::after {
        /*<!--background:linear-gradient(-45deg, transparent 15px, #58a 0);-->*/
        background: transparent;
        content: '';
        height: 50px;
        position: absolute;
        top: -25px;
        width: 100px;
        box-shadow: 0 5px 10px -7px hsla(0, 0% ,0%, 0.5);
        left: -50px;
        transform: rotate(-45deg);
    }
</style>
