import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import App from './App'
import store from './store'
import Home from './components/Home'
import TimeEntry from './components/TimeEntry'
import CutPhoto from './components/CutPhoto'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'element-ui/lib/theme-default/index.css'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUI)
Vue.use(MintUI)

const routes = [
  {
    path: '/',
    component: Home
  }, {
    path: '/home',
    component: Home
  }, {
    path: '/time-entries',
    component: TimeEntry,
    children: [{
      path: 'create-task',
      component: resolve => require(['./components/Task.vue'], resolve)
      // component: Task
    }]
  }, {
    path: '/cutPhoto',
    component: CutPhoto
  }
]

const router = new VueRouter({routes})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  ...App
})
