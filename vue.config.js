module.exports = {
  runtimeCompiler: true,
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            "primary-color": "#FC7979",
            "link-color": "#F8F7FC",
            "border-radius-base": "5px"
          },
          javascriptEnabled: true
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        vue$: "vue/dist/vue.esm.js"
      }
    }
  }
};
