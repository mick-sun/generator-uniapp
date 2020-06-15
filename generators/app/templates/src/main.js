import Vue from 'vue'
import App from './App'
import util from './utils/utils'
import store from './store'

import bootstrap from '@/core/bootstrap'
import './utils/filters'

Vue.prototype.$setNavigationBarColor = util.setNavigationBarColor

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App,
  store,
  created: bootstrap
})
app.$mount()
