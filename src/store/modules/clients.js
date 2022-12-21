import { clientsAPI } from "@/api/clientsAPI";

const state = () => ({
  all: [],
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
    try {
      const clients = await clientsAPI.getAll();
      commit("setClients", clients);
    } catch (error) {
      commit("setError", "Ошибка получения данных");
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
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
