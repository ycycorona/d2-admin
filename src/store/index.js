import Vue from 'vue'
import Vuex from 'vuex'

import d2admin from './modules/d2admin'
import light from './modules/light'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    d2admin,
    light
  }
})
