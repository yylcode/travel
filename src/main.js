
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from  'fastClick'
import 'styles/reset.css'
// 1像素边框问题的解决
import 'styles/border.css' 
import 'styles/iconfont.css' 


Vue.config.productionTip = false
fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
