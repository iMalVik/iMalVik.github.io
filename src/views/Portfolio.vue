<template lang="pug">
  .Portfolio
    v-main(style='position: relative;')
      //frame-space(:width2='width2' :height2='height2' style='position: fixed;')
      //v-img(:src="require('../svg/iMac - 1.svg')" height='100vh'  style='position: absolute;')
      v-container(fluid).pr-6.pl-6.pt-6
        //v-row(align="center" justify="center")
            v-col.text-center
                //btni18n
        v-row(align="center" justify="center")
          v-col.col-6.text-center
            v-card(outlined color='transparent')
              .d-flex.flex-no-wrap.justify-space-between
                v-avatar.ma-3(width=120 height=160 tile)
                  v-img(src='@/assets/img/foto.jpg')
                div
                  v-card-title.headline.justify-end.white--text {{ $t('portfolio.about.name') }}
                  v-card-subtitle.d-flex.justify-center.align-end
                    btn-communication
              //v-card-title.justify-end.pr-6 HI
              //v-card-actions
          v-col.col-6.text-center
            btni18n-hexagon
        v-row(align="center" justify="center")
          PhotoAndSocial
        v-row(align="center" justify="center")
          PhotoSVG
        v-row(align="center" justify="center")
          PhotoSVG2
</template>

<script>
  import AppBar           from '../components/AppBar'
  import Btni18n          from '../components/Btni18n'
  import BtnCommunication from '../components/portfolio/BtnCommunication'
  import Btni18nHexagon   from '../components/portfolio/Btni18nHexagon'
  import ProgressLinear   from '../components/portfolio/ProgressLinear'
  import FrameSpace       from '../components/portfolio/FrameSpace'
  import PhotoAndSocial   from '../components/portfolio/photo/PhotoAndSocial'
  import PhotoSVG         from '../components/portfolio/photo/PhotoSVG'
  import PhotoSVG2         from '../components/portfolio/photo/PhotoSVG2'

  export default {
    name: 'Portfolio',
    components: {
      PhotoSVG,
      PhotoSVG2,
      PhotoAndSocial,
      FrameSpace,
      ProgressLinear,
      Btni18nHexagon,
      BtnCommunication,
      Btni18n,
      AppBar,
    },
    // el: '',
    // render: {},
    props: [],
    data: () => ({
      height2: '100vh',
      width2: '100%',
    }),
    watch: {},
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
  .Portfolio {
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8)), url('../assets/img/orion-1920.jpg');
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    /*background-color: black;*/
    /*position: fixed;*/
    width: 100vw;
    height: 100vh;
    /*height: 100vh;*/
    /*max-height: 100%;*/
  }
</style>
