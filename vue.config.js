module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
  outputDir: 'dist',
  indexPath: 'index.html',
};
