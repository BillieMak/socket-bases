import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null,
    msg : null,
  },
  getters: {
    getUser(state){
      return state.user
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
