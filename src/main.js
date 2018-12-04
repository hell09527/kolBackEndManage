// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'

import router from './router'
import VueRouter from 'vue-router'
import Vuex from 'vuex';
Vue.use(Vuex);
Vue.use(VueRouter)

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import store from "./vuex/store";

import JsEncrypt from "jsencrypt";
import VueImgInputer from 'vue-img-inputer'
Vue.component('VueImgInputer', VueImgInputer)
const TOKEN = sessionStorage.getItem('TOKEN');
window.axios = axios;
Vue.use(ElementUI)
//原型添加新对象 ----JSEncrypt 不对称密匙
Vue.prototype.$jsEncrypt = JsEncrypt;
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
});

