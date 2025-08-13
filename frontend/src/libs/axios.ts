import axios from "axios";

export const zipcodeapi = axios.create({ 
    baseURL: "/zipcodeapi", 
    timeout: 5000
});

export const api = axios.create({ 
    baseURL: "/api", 
    timeout: 5000
});