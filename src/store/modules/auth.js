import { authAPI } from "@/api/authAPI";
import { getToken, removeToken, saveToken } from "@/utils/token";

const initialToken = getToken();
if (initialToken) authAPI.setCommonToken(initialToken);

const state = () => ({
  token: initialToken,
  loggedStatus: Boolean(initialToken),
  error: null,
});

const actions = {
  async login({ commit }, data) {
    commit("setError", null);
    try {
      const token = await authAPI.login(data);
      authAPI.setCommonToken(token.jwt);
      saveToken(token.jwt);
      commit("setToken", token.jwt);
      commit("setStatus", true);
    } catch (error) {
      commit("setToken", null);
      commit("setStatus", false);
      commit("setError", "Ошибка авторизации");
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
    state.loggedStatus = status;
  },
  setError(state, error) {
    state.error = error;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
