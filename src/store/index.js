import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  // plugins: [createPersistedState()],
  state: {
    list: {},
  },
  mutations: {
    list(state, o) {
      state.list = o;
    },
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState({
    key: 'keyname',
    storage: window.localStorage         
 })]
})


// import { createStore } from 'vuex';
// import createPersistedState from 'vuex-persistedstate'

// export default createStore({
//   plugins: [createPersistedState],
//   state: {
//     list:{},
//   },
//   mutations: {
//     list(state,o){
//       state.list=o;
//     },
//   },
//   actions: {
//   },
//   modules: {
//   }
// })
