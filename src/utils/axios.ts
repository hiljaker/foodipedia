import axios from "axios";
import { env } from "./env";

const axiosInstance = axios.create({
  baseURL: env.baseUrl,
});

export default axiosInstance;
