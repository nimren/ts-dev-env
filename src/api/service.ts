import axios, { AxiosPromise, AxiosRequestConfig } from "axios";

export default class Service {
    public static getAsync<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T> {
        return axios.get<T>(url, config);
    }

    public static postAsync(url: string, data: any, config?: AxiosRequestConfig): AxiosPromise<any> {
        return axios.post(url, data, config);
    }

    public static delAsync(url: string): AxiosPromise<any> {
        return axios.delete(url);
    }
}
