import Vue from 'vue'
import Router from 'vue-router'
import table from '@/views/table'
import elementary from '@/views/elementary'
import uploading from '@/views/uploading'
import test from '@/views/test'
import login from '@/views/login/login'
import indent from '@/views/indent/indent'
import store from '@/views/store/store'
import Userconsult from '@/views/Userconsult/Userconsult'
import historydan from '@/views/historydan/historydan'
import agency from '@/views/agency/agency'
import statistics from '@/views/statistics/statistics'
import commodity from '@/views/productlist/commodity'
import wewee from '@/views/bonus/wewee'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/statistics',
      name: 'statistics',
      component:  statistics
    },
    {
      path: '/wewee',
      name: 'wewee',
      component:  wewee
    },
    {
      path: '/agency',
      name: 'agency',
      component:  agency
    },
    {
      path: '/historydan',
      name: 'historydan',
      component:  historydan
    },
    {
      path: '/Userconsult',
      name: 'Userconsult',
      component:  Userconsult
    },
    {
      path: '/elementary',
      name: 'elementary',
      component: elementary
    },
    {
      path: '/table',
      name: 'table',
      component: table
    },
    {
      path: '/uploading',
      name: 'uploading',
      component: uploading
    },
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/commodity',
      name: 'commodity',
      component: commodity
    },
    {
      path: '/test/:id',
      name: 'test',
      component: test
    },
    {
      path: '/indent',
      name: 'indent',
      component: indent
    },
    {
      path: '/store',
      name: 'store',
      component: store
    },
  ]
})
