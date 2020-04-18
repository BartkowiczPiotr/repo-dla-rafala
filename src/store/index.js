import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

    user: null,

  },
  mutations: {

    setUser(state, user){
      user ? state.user = user : state.user = null;
    },

  },
  actions: {

    SET_USER({ commit }, user){
      commit('setUser', user);
    },

  },
  modules: {
  },
});
