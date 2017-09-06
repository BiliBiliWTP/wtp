import Vue from 'vue'

import VueRouter from 'vue-router'

import App from './components/App.vue'

import login from './components/account/login.vue'

import register from './components/account/register.vue'

Vue.use(VueRouter);

const router = new VueRouter({
  routes:[
    {path:'/',redirect:'/login'},
    {path:'/login',component:login},
    {path:'/register',component:register}
  ]
});
const vm = new Vue({
  el: '#app',
  render: c =>c(App),
  router
});

