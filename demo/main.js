import Vue from 'vue';
import App from './app';
import VueRouter from 'vue-router'
import swiper from './views/swiper/Index';
//定义路由
const routes = [
  {path:'/',component:App},
  { path: '/swiper', component: swiper },
 ]
 const router = new VueRouter({
   routes
 })

new Vue({
  el: '#app',
  router
}).$mount('#app')
