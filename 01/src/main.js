import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
 

import VueRouter from 'vue-router'

import DeviceShow from './components/deviceshow'
import ProductShow from './components/productshow'
import DeviceDetail from './components/devicedetail'
Vue.use(VueRouter)
Vue.use(ElementUI);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.prototype.$axios = axios;

const router = new VueRouter({
	mode: 'history',
   routes :[
  { path: '/', component: ProductShow },
  { path: '/deviceshow', component: DeviceShow },
  { path: '/deviceshow/devicedetail/:id/:pkey', component: DeviceDetail },
  { path: '/deviceshow', component: App,
  	children:[
  	{
  		path:'detail',
  		component:DeviceDetail
  	}]
   },
]
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
