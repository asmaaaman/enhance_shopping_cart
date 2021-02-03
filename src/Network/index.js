import axios from "axios";
import { requestHandler, successHandler, errorHandler } from "./interceptor";
import { baseURL } from "../utils/Constants";

export const axiosInstance = axios.create({
  baseURL: baseURL,
});
console.log("instancbbbbbbbbe", baseURL);

axiosInstance.interceptors.request.use((request) => {
  requestHandler(request);
});

axiosInstance.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
);
