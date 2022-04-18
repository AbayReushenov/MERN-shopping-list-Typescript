import axios from "axios";

export const axiosCreateBaseURLApi = axios.create({
    baseURL: "/api/"
});
