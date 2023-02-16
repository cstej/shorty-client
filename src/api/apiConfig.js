import axios from "axios";

const axiosConfig = axios.create({
  baseURL: "https://shorty-cvii.onrender.com/",
  withCredentials: true,
});

export default axiosConfig;
