import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'  //@代表的是src这个目录
import City from '@/pages/city/City'
import Detail from  '@/pages/detail/Detail'
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
    },{
      path:'/detail/:id',
      name:'Detail',
      component:Detail
    }
  ],
  // 每次路由切换路径时，初始位置都在页面顶端
  scrollBehavior(to,from,savedPosition){
    return{x:0,y:0}

  }
})
