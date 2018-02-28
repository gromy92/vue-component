import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'

import index from './module/index/Index';

Vue.use(VueRouter)

Vue.config.productionTip = false
//定义路由
const routes = [
 {path:'/',component:App},
 { path: '/index', component: index },
]
const router = new VueRouter({
  routes
})
new Vue({
  el: '#app',
  router
}).$mount('#app')
