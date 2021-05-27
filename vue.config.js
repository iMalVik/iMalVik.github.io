module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    transpileDependencies: ['vuetify'],
    //chainWebpack: config => {
    //    config.module
    //.rule('json5')
    //.test(/\.json5$/i)
    //.use('json5-loader')
    //    .loader('json5-loader')
    //    .end()
    //.rule('json')
    //.test(/\.json$/)
    //.use('json-loader')
    //    .loader('json-loader')
    //    .end()
    //},
    //pluginOptions: {
    //    i18n: {
    //        locale: 'ru',
    //        fallbackLocale: 'en',
    //        localeDir: 'locales',
    //        enableInSFC: true,
    //    },
    //},
}
