import Vue from 'vue'
import Vuex from 'vuex'

import user from '@/store/modules/user'
import app from '@/store/modules/app'

import getters from '@/store/getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    user
  },
  state: {},
  mutations: {},
  actions: {},
  getters
})
