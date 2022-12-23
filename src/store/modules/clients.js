import { clientsAPI } from "@/api/clientsAPI";

const state = () => ({
  all: [],
  status: null,
  error: null,
});

const getters = {
  getClientById: (state) => (id) => {
    return state.all.find((client) => client.id === id);
  },
};

const actions = {
  async getAllClients({ commit }) {
    commit("setError", null);
    commit("setStatus", "loading");
    try {
      const clients = await clientsAPI.getAll();
      commit("setClients", clients);
      commit("setStatus", "success");
    } catch (error) {
      commit("setError", "Ошибка получения данных");
      commit("setStatus", "fail");
    }
  },
  async postClient({ commit, dispatch }, data) {
    commit("setError", null);
    commit("setStatus", "loading");
    try {
      await clientsAPI.postClient(data);
      commit("setStatus", "success");
      await dispatch("getAllClients");
    } catch (error) {
      commit("setError", "Ошибка отправки данных");
      commit("setStatus", "fail");
    }
  },
};

const mutations = {
  setClients(state, clients) {
    state.all = clients;
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
  getters,
  actions,
  mutations,
};
