import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    showLoginForm: false,
    token: null,
  },
  mutations: {
    updateToken(state, newToken) {
      state.token = newToken;
    },
  }
});
