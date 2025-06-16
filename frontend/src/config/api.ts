import axios from "axios";
import { env } from "./config";

const api = axios.create({
  baseURL: env.NEXT_PUBLIC_API_URL,
  headers: {
    "x-prolog-api-token": env.NEXT_PUBLIC_API_SECRET_KEY,
    "Content-Type": "application/json",
  },
});

export default api;
