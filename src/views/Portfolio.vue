<template lang="pug">
    .Portfolio
        | Portfolio
</template>

<script>
    export default {
        name: 'Portfolio',
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
    .Portfolio {
        background-image: linear-gradient( rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8) ), url('../img/404_office.jpg');
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        background-color: black;
    }
</style>
