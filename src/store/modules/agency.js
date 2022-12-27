import { agencyAPI } from "@/api/agencyAPI";

const state = () => ({
  data: {},
  status: null,
  error: null,
});

const actions = {
  async getAgencyData({ commit }) {
    commit("setError", null);
    commit("setStatus", "loading");
    try {
      const data = await agencyAPI.get();
      commit("setData", data.agency);
      commit("setStatus", "success");
    } catch (error) {
      commit("setError", "Ошибка получения данных");
      commit("setStatus", "fail");
    }
  },
  async editAgency({ commit, dispatch }, data) {
    commit("setError", null);
    commit("setStatus", "loading");
    try {
      await agencyAPI.put(data);
      commit("setStatus", "success");
      await dispatch("getAgencyData");
    } catch (error) {
      commit("setError", "Ошибка отправки данных");
      commit("setStatus", "fail");
    }
  },
};

const mutations = {
  setData(state, data) {
    state.data = { ...data };
  },
  setError(state, error) {
    state.error = error;
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
