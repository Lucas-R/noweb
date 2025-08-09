import axios from "axios";

const URL_API = import.meta.env.VITE_URL_API;

export const api = axios.create({ 
    baseURL: URL_API, 
    timeout: 5000
});