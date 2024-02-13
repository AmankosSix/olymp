import axios from "axios";
import router from "../router";
import Vue from "vue";
import VueCookies from "vue-cookies";
Vue.use(VueCookies);

const instance = axios.create({
  // baseURL: process.env.VUE_APP_API_URL,
});

instance.defaults.timeout = 300000;
instance.defaults.withCredentials = true;
instance.defaults.headers.common["Authorization"] =
  "Bearer " + Vue.$cookies.get("token");
instance.defaults.xsrfHeaderName = "X-CSRFToken";
instance.defaults.xsrfCookieName = "csrftoken";

instance.interceptors.request.use(
  function (config) {
    config.headers.Authorization = "Bearer " + localStorage.getItem("token");
    // config.headers.Authorization = 'Bearer ' + Vue.$cookies.get('token');
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    if (
      response.data !== null &&
      response.data.status_code &&
      response.data.status_code === 401
    ) {
      if (router.currentRoute.name !== "reset") {
        Vue.prototype.$cookies.remove("token");
        localStorage.clear("token");
        router.push({ name: "login" });
      }
    } else if (
      response.data !== null &&
      response.data.status_code &&
      response.data.status_code === 412 &&
      response.data.detail === "Offer 2 not accepted"
    ) {
      router.push({ name: "second-offer" });
    } else if (
      response.data !== null &&
      response.data.status_code &&
      response.data.status_code === 412 &&
      response.data.detail === "Offer 1 not accepted"
    ) {
      router.push({ name: "offer" });
    } else if (
      response.data !== null &&
      response.data.status_code &&
      response.data.status_code === 412 &&
      response.data.detail === "Offer not signed"
    ) {
      router.push({ name: "second-offer" });
    } else {
      return response;
    }
  },
  function (error) {
    if (error.response.status === 418) {
      router.push({ name: "418-page" });
    } else if (error.response.status === 401) {
      Vue.prototype.$cookies.remove("token");
      router.push({ name: "login" });
    } else if (error.response.status === 404) {
      router.back();
    } else if (error.response.status === 500) {
      router.push({ name: "500-page" });
    } else if (error.response.status === 412) {
      router.push({ name: "offer" });
    } else if (error.response.status === 451) {
      router.push({ name: "second-offer" });
    }
    return Promise.reject(error);
  }
);

export default instance;
