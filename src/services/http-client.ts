import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios';

class HttpClient {
    private instance: AxiosInstance;

    constructor() {
        const baseURL: string = import.meta.env.MODE === "development"
            ? "http://localhost:5000/api"
            : "https://api.github.com";
        
        this.instance = axios.create({
            baseURL,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        return this.instance.get(url, config).then(this.handleResponse);
    }

    post<T, U>(url: string, data?: U, config?: AxiosRequestConfig): Promise<T> {
        return this.instance.post(url, data, config).then(this.handleResponse);
    }

    patch<T, U>(url: string, data?: U, config?: AxiosRequestConfig): Promise<T> {
        return this.instance.patch(url, data, config).then(this.handleResponse);
    }

    private handleResponse<T>(response: AxiosResponse<T>): T {
        return response.data;
    }
}

const HttpClientInstance = new HttpClient();

export default HttpClientInstance;