module.exports = {
  outputDir: '../backend/views',

  pages: {
    index: {
      entry: 'src/main.js',
      title: 'WEB System'
    }
  },

  publicPath: './',
  lintOnSave: false,

  transpileDependencies: [
    'vuetify'
  ]
}
