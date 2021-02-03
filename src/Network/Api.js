import { axiosInstance } from "./index";

export const getProducts = async () => {
  return await axiosInstance.get(`/products`);
};
