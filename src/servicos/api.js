import axios from "axios";

const api = axios.create({
   baseURL: "http://172.30.30.13:3000"
})

export default api;