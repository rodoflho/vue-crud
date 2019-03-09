import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

const api_url_get_users = "https://reqres.in/api/users";

export default new Vuex.Store({
  state: {
    user: {},
    pessoas: []
  },

  getters: {
    pessoas: state => state.pessoas
  },

  actions: {
    userLogged ({commit}, user) {
      commit('USER_LOGGED', user)
    },
    loadPessoas ({ commit }) {
      //console.log("assds");
      axios
        .get(api_url_get_users)
        .then(r => r.data)
        .then(pessoas => {
          commit('ADD_PESSOAS', pessoas)
        })
    },
  },

  mutations: {
    USER_LOGGED (state, user) {
      state.user = user
    },
    ADD_PESSOAS (state, pessoas) {
      state.pessoas = pessoas
    }
  },
});