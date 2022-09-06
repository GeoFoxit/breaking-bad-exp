import axios from "axios";
import { API_BASE_URL } from "../utils/constants";

export const API = axios.create({
  baseURL: API_BASE_URL,
});
