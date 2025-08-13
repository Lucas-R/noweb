import axios from "axios";

const ZIPCODE_API = import.meta.env.VITE_ZIPCODE_API;
const URL_API = import.meta.env.VITE_URL_API;

export const zipcodeapi = axios.create({ 
    baseURL: ZIPCODE_API, 
    timeout: 5000
});

export const api = axios.create({ 
    baseURL: URL_API, 
    timeout: 5000
});