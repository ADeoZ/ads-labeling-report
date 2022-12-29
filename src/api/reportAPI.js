import axios from "axios";
import * as path from "@/api/common";

export const reportAPI = {
  async postFile(formData) {
    try {
      const response = axios.post(`${path.report}/post.php`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        responseType: "blob",
      });
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
};
