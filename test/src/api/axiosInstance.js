import axios from "axios";

const API_BASE_URL = "http://localhost:4000";
// const API_KEY = "put api key here if needed";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  // headers: {
  //   "x-api-key": API_KEY,
  // },
});

export default axiosInstance;
