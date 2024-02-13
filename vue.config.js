const path = require("path");

// Переменные для узнавания Продакшн или Девелопер
const isProd = process.env.NODE_ENV === "production";
const isDev = !isProd;

// Названия файла при билдинге
// const filename = (ext) => (isDev ? `bundle.${ext}` : `bundle.[hash].${ext}`);
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/colors.scss";`,
      },
    },
  },
  transpileDependencies: ["vuetify"],
  runtimeCompiler: true,
  devServer: {
    // host:'local.skstore.kz',
    port: 8080,
    proxy: {
      // "^/api/": {
      //     target: "http://172.29.250.1:8080",
      //     pathRewrite: { "^/api/": "/api/" },
      //     changeOrigin: true,
      //     logLevel: "debug"
      // },
      "^/ws/": {
        target: "http://192.168.35.59:8080",
        pathRewrite: { "^/ws/": "/ws/" },
        changeOrigin: true,
        logLevel: "debug",
      },
      // "^/api/":{
      //     target: "http://172.29.123.80:8080",
      //     pathRewrite: { "^/api/": "/api/" },
      //     changeOrigin: true,
      //     logLevel: "debug"
      // },
      // "^/api/":{
      //     target: "http://10.189.87.11",
      //     pathRewrite: { "^/api/": "/api/" },
      //     changeOrigin: true,
      //     logLevel: "debug"
      // },
      // "^/api/":{
      //     target: "http://172.29.94.199:8080",
      //     pathRewrite: { "^/api/": "/api/" },
      //     changeOrigin: true,
      //     logLevel: "debug"
      // },
      // "^/api/":{
      //     target: "http://192.168.35.59:8080",
      //     pathRewrite: { "^/api/": "/api/" },
      //     changeOrigin: true,
      //     logLevel: "debug"
      // },
      // "^/api/": {
      //     target: "https://skstore.kz",
      //     pathRewrite: { "^/api/": "/api/" },
      //     changeOrigin: true,
      //     logLevel: "debug"
      // },
      "^/api/": {
        target: "http://10.242.111.245:8001",
        pathRewrite: { "^/api/": "/api/" },
        changeOrigin: true,
        logLevel: "debug",
      },
    },
  },
  configureWebpack: {
    output: {
      filename: isDev
        ? "samruk-kazyna-store-[name].[hash:28].js"
        : "[name]-legacy.[hash:8].js",
      path: path.resolve(__dirname, "dist"),
    },
    devtool: false,
  },
};
