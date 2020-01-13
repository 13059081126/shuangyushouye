/* eslint-disable */
import VueRouter from 'vue-router'
import Vue from 'vue'
//首页
import News from '@/views/news'
Vue.use(VueRouter)
const router = new VueRouter({
    routes:[
        { path: '/',redirect:'/news'},
        { path: '/news', component: News }
    ]
  })
  export default router