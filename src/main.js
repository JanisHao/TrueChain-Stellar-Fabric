// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './style.css'

import {CookieStorage} from 'cookie-storage'

window.cookieStorage = new CookieStorage()

Vue.config.productionTip = false

window.sessionStorage.setItem('userToken', window.cookieStorage.getItem('userToken'))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})