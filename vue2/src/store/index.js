import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

export default new Vuex.Store({
  // 状态，存放数据
  state: {},
  // 修改状态，方法
  mutations: {},
  // 存放异步请求
  actions: {},
  // 模块管理
  modules: {},
  // 计算属性
  getters: {},


  plugins: [
    new VuexPersistence({
      storage: window.localStorage
    }).plugin
  ]
})