import axios from "axios";
import * as path from "@/api/common";
import { mapContractorIsEnd } from "@/api/service";

export const clientsAPI = {
  async getAll() {
    try {
      const response = await axios.get(`${path.clients}/get.php`, {
        transformResponse: [JSON.parse, mapContractorIsEnd],
      });
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
  async postClient(data) {
    try {
      const response = axios.post(`${path.clients}/post.php`, data);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
  async putClient(data) {
    try {
      const response = axios.put(`${path.clients}/put.php`, data);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
  async deleteClient(id) {
    try {
      const response = axios.delete(`${path.clients}/delete.php`, {
        params: { id },
      });
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
};
