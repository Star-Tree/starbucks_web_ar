module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/starbucks_web_ar/' : '/',

  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/scss/all.scss";`
      }
    }
  }
};