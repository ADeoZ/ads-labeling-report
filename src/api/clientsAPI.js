import axios from "axios";
import { mapContractorIsEnd } from "@/api/service";

axios.defaults.baseURL = `${process.env.VUE_APP_API_URL}/clients`;

export const clientsAPI = {
  async getAll() {
    try {
      const response = await axios.get("/get.php", {
        transformResponse: [JSON.parse, mapContractorIsEnd],
      });
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
  async postClient(data) {
    try {
      const response = axios.post("/post.php", data);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
  async putClient(data) {
    try {
      const response = axios.put("/put.php", data);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
  async deleteClient(id) {
    try {
      const response = axios.delete("/delete.php", {
        params: { id },
      });
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
};
