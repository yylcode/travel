
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from  'fastClick'
import './assets/styles/reset.css'
// 1像素边框问题的解决
import './assets/styles/border.css' 

Vue.config.productionTip = false
fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
