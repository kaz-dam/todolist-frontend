import axios, { AxiosInstance } from "axios";

const baseURL: string = process.env.NODE_ENV === "development"
    ? "http://localhost:5000/api"
    : "https://api.github.com";

const httpClient: AxiosInstance = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default httpClient;