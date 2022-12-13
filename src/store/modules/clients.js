import { clientsAPI } from "@/api/clientsAPI";

const state = () => ({
  all: [],
});

const actions = {
  async getAllClients({ commit }) {
    const clients = await clientsAPI.getAll();
    commit("setClients", clients);
  },
};

const mutations = {
  setClients(state, clients) {
    state.all = clients;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
