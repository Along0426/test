import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import Vant from 'vant';
import 'vant/lib/index.css';
import axios from 'axios'
Vue.prototype.$axios = axios
Vue.use(Vant);
// main.js文件
// 配置请求的跟路径
// axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/'
// axios.interceptors.request.use(config => {
// console.log(config)
// config.headers.Authorization = window.localStorage.getItem('token')
// 在最后必须 return config
// return config
// })
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')