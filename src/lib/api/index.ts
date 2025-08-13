import axios, { type AxiosRequestConfig, type AxiosResponse } from "axios";

type AxiosMethods = "get" | "post" | "put" | "delete" | "patch";

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

const makeRequest = async <T>(
  method: AxiosMethods,
  endpoint: string,
  data?: unknown,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response: AxiosResponse<T> = await httpClient({
    method,
    url: endpoint,
    data,
    ...config,
  });

  return response.data;
};

export const apiGet = <T>(
  endpoint: string,
  config?: AxiosRequestConfig
): Promise<T> => makeRequest("get", endpoint, undefined, config);

export const apiPost = <T>(
  endpoint: string,
  data?: unknown,
  config?: AxiosRequestConfig
): Promise<T> => makeRequest("post", endpoint, data, config);

export const apiPut = <T>(
  endpoint: string,
  data?: unknown,
  config?: AxiosRequestConfig
): Promise<T> => makeRequest("put", endpoint, data, config);

export const apiDelete = <T>(
  endpoint: string,
  config?: AxiosRequestConfig
): Promise<T> => makeRequest("delete", endpoint, undefined, config);

export const apiPatch = <T>(
  endpoint: string,
  data?: unknown,
  config?: AxiosRequestConfig
): Promise<T> => makeRequest("patch", endpoint, data, config);
