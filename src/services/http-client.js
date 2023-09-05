import axios from "axios";
import { QueryClient } from "react-query";

export const request = axios.create({
  baseURL: process.env.REACT_APP_PUBLIC_BASE_URL,

  params: {
    "project-id": "9edbd20e-83bb-4739-afb6-073a266a2294",
  },
  headers: {
    Authorization: "API-KEY",
    "environment-id": "d83d65b7-ddc9-4fa4-9c7b-2209b064d212",
    "resource-id": "41c36204-6210-4b5c-b5b2-ebe86109edc3",
    "X-API-KEY": "P-wgRcxnnM7De2zFe8S4uXRMrC0rgieSNY",
  },
});

export const requestUnion = axios.create({
  baseURL: process.env.REACT_APP_PUBLIC_BASE_URL_UNION,
  params: {},
  headers: {},
});

const errorHandler = (error) => {
  return Promise.reject(error.response);
};

request.interceptors.response.use((response) => response.data, errorHandler);
requestUnion.interceptors.response.use(
  (response) => response.data,
  errorHandler
);

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});
