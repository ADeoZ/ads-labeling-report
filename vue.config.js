const { defineConfig } = require("@vue/cli-service");
const { VuetifyPlugin } = require("webpack-plugin-vuetify");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [new VuetifyPlugin()],
  },
});
