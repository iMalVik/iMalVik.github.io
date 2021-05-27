<template lang="pug">
  .PhotoSVG
    svg(width=128 height=160)
      pattern(id='pattern' width='100%' height='100%')
        image(xlink:href='@/assets/img/foto.jpg' width='100%' height='100%' preserveAspectRatio='xMidYMin splice')
      circle(cx='64' cy='80' r='64' fill='url(#pattern)')
</template>

<script>
  export default {
    name: 'PhotoSVG',
    // el: '',
    // render: {},
    props: [],
    data: () => ({}),
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
  .PhotoSVG {
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
</style>
