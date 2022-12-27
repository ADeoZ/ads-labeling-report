import axios from "axios";
import * as path from "@/api/common";

export const agencyAPI = {
  async get() {
    try {
      const response = await axios.get(`${path.agency}/get.php`);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
  async put(data) {
    try {
      const response = axios.put(`${path.agency}/put.php`, data);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
};
