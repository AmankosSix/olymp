import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "@/plugins/axios-config";
import VueAxios from "vue-axios";
import i18n from "@/plugins/VueI18n";
import vuetify from "./plugins/vuetify";
import api from "./api";
import "@/configs/globalComponents";
import "@/assets/scss/index.scss";
import "animate.css";
import ScrollAnimate from "@/configs/directiveScrollAnimate";

Vue.directive("scroll-animate", ScrollAnimate);
Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.prototype.api = api;
new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
