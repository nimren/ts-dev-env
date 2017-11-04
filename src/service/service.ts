import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';
/**
 * Base service class
 */
export class Service {
  public getAsync<T = {}>(url: string, config?: AxiosRequestConfig): AxiosPromise<T> {
    return axios.get<T>(url, config);
  }

  public postAsync<T = {}>(url: string, data: {}, config?: AxiosRequestConfig): AxiosPromise<T> {
    return axios.post<T>(url, data, config);
  }

  public delAsync(url: string): AxiosPromise<{}> {
    return axios.delete(url);
  }
}
