import axios from "axios";
import { clearData } from "@/api/service";

axios.defaults.baseURL = `${process.env.VUE_APP_API_URL}/clients`;

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
  async postClient(data) {
    try {
      const response = axios.post("/post.php", clearData(data));
      console.log("response", response);
    } catch (error) {
      console.log("ошибка", error);
      throw new Error(error);
    }
  },
};
