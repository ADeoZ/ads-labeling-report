import { authAPI } from "@/api/authAPI";
import { getToken, removeToken, saveToken } from "@/utils/token";

const initialToken = getToken();

const state = () => ({
  token: initialToken,
  loggedStatus: Boolean(initialToken),
});

const actions = {
  async login({ commit }, data) {
    try {
      const token = await authAPI.login(data);
      authAPI.setCommonToken(token.jwt);
      saveToken(token.jwt);
      commit("setToken", token.jwt);
      commit("setStatus", true);
    } catch (error) {
      commit("setToken", null);
      commit("setStatus", false);
    }
  },
  logout({ commit }) {
    authAPI.clearCommonToken();
    removeToken();
    commit("setToken", null);
    commit("setStatus", false);
  },
};

const mutations = {
  setToken(state, data) {
    state.token = data;
  },
  setStatus(state, status) {
    state.status = status;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
