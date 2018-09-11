import Vue from "vue";
import App from "./App";
import VueRouter from "vue-router";
import Index from "./views/Index";

// import '/src/assets/styles/medals/medals.scss';


Vue.use(VueRouter);

const router = new VueRouter({
  mode: "hash", //history
  routes: [
    {
      path: "/",
      component: List,
      name: "list"
    }]
});

/* eslint-disable no-new */

let app = new Vue({
  router,
  ...App
});
app.$mount("#app");
