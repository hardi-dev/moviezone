import axios from "axios";
import { IRequestHeaders } from "./types";
import { API_URL } from "./constant";

export const API = () => {
  const requestHeaders: IRequestHeaders = {
    accept: "application/json",
  };

  const request = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers: requestHeaders,
  });

  return { request };
};
