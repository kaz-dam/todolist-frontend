import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios';

class HttpClient {
    private instance: AxiosInstance;

    constructor() {
        const baseURL: string = process.env.NODE_ENV === "development"
            ? "http://localhost:4000"
            : process.env.REACT_APP_TODO_API_URL || "";
        
        this.instance = axios.create({
            baseURL,
            headers: {
                "Content-Type": "application/json",
                "X-Api-Key": process.env.REACT_APP_TODO_API_KEY || "",
            },
        });
    }

    get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        return this.instance.get(url, config).then(this.handleResponse);
    }

    post<T, U>(url: string, data?: U, config?: AxiosRequestConfig): Promise<T> {
        return this.instance.post(url, data, config).then(this.handleResponse);
    }

    put<T, U>(url: string, data?: U, config?: AxiosRequestConfig): Promise<T> {
        return this.instance.put(url, data, config).then(this.handleResponse);
    }

    delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        return this.instance.delete(url, config).then(this.handleResponse);
    }

    private handleResponse<T>(response: AxiosResponse<T>): T {
        return response.data;
    }
}

const HttpClientInstance = new HttpClient();

export default HttpClientInstance;