import { axiosInstance } from "./index";

export const getProducts = async () => {
  return await axiosInstance.get(`/products`);
};

export const getSingleProductDetails = async (id) => {
  return await axiosInstance.get(`/products/${id}`);
};
