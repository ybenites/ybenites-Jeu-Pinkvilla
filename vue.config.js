// vue.config.js
module.exports = {
    // options...
    css: {
        loaderOptions: {
          scss: {
            prependData: `
              @import "@/assets/scss/_variables.scss";
              @import "@/assets/scss/_mixins.scss";
            `
          }
        }
      }
}