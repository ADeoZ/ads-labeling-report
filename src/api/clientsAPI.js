import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/api/clients";

export const clientsAPI = {
  async getAll() {
    try {
      const response = await axios.get("/get.php");
      const { clients } = response.data;
      const result = clients.map((client) => ({
        ...client,
        contractor_is_end: !!client.contractor_is_end,
      }));
      return result;
    } catch (error) {
      throw new Error(error);
    }
  },
};
