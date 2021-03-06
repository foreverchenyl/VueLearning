import Vue from 'vue'
import Vuex from 'vuex'

import activities from './modules/activities'
import search from './modules/search'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    activities,
    search
  }
})
