import axios from "axios";

const API = {
  data: axios.create({
    baseURL: "https://63f8f6b21dc21d5465cbbfc1.mockapi.io/data",
  }),
  
  async getProducts() {
    try {
      const response = await this.data.get("/");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export default API;
