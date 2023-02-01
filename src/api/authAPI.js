import axios from "axios";
import * as path from "@/api/common";

export const authAPI = {
  async login(data) {
    try {
      const response = await axios.post(`${path.users}/login.php`, data);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
};
