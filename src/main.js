// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import qs from 'qs'
import Vuex from 'vuex'
import store from 'vuex'//引入vuex
// import echars from "echarts"
 // Vue.prototype.$echarts=echarts
Vue.config.productionTip =false
Vue.prototype.$ajax = axios
Vue.prototype.$qs=qs
axios.defaults.setTimeout= 5000;
axios.defaults.headers.post['Content-Type']='application/json;charset=UTF-8';
axios.defaults.baseURL='http://localhost:8090/Servlet/';
// Vue.prototype.$http = axiosIns;
Vue.config.productionTip = false
new Vue({
  	el: '#App',
  	router,
  	components: { App },
  	template: '<App/>'
})
