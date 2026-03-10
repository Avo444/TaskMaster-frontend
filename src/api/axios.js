import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_DATABASE,
});

export const Axios = {
    getFaq: () => instance.get("/api/faq"),
    getTestimonal: () => instance.get("/api/testimonals")
};
