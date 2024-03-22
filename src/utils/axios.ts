import axios from "axios";
import { env } from "./env";

const axiosInstance = axios.create({
  baseURL: env.baseUrl,
});

axiosInstance.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const accessToken = localStorage.getItem("access-token") || "";

      config.headers.Authorization = "Bearer ".concat(accessToken);
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

export default axiosInstance;
