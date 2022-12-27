import axios from "axios";
import * as path from "@/api/common";

export const reportAPI = {
  async postFile(formData) {
    try {
      console.log("formData", formData.get("file"));
      const response = axios.post(`${path.report}/post.php`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
};
