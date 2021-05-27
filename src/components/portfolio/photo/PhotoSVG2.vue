<template lang="html">
  <svg width="128" height="160" xmlns="http://www.w3.org/2000/svg">
    <pattern id='pattern' width='100%' height='100%'>
      <image xlink:href='https://demo.cyotek.com/assets/img/image-4x.png' preserveAspectRatio='xMidYMin splice'/>
    </pattern>
    <polygon points=" 0 28, 28 0, 127 0, 127 159, 0 159, 0 28" stroke="none" fill="url(#pattern)"/>
  </svg>
  <!-- https://developer.mozilla.org/ru/docs/Web/SVG/Tutorial -->
</template>

<script>
  export default {
    name: 'PhotoSVG2',
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
  .PhotoSVG2 {
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
