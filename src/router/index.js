import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'  //@代表的是src这个目录
import City from '@/pages/city/City'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
    	path:'/city',
    	name:'City',
    	component:City
    }
  ]
})
