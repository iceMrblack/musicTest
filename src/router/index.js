import Vue from 'vue'
import Router from 'vue-router'

// 所有测评下的子组件需要应用到路由的均放在下面,其他页面同理
const Evaluation = () => import('@/views/evaluation/Evaluation.vue')



Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/evaluation'
  },
  {
    path: '/evaluation',
    name:'Evaluation',
    component: Evaluation,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component:About
  // }
]

export default new Router({
  mode: 'history',
  routes,
})
