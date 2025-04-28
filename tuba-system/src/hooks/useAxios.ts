import axios, { AxiosInstance } from "axios";
import { handleCatchError } from "../functions/handleCatchError";

const useAxios = (token?: string): { server: AxiosInstance } => {
  const server = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}`,
    headers: token
      ? {
          Authorization: `Bearer ${token}`,
        }
      : {},
  });

  server.interceptors.response.use(
    (response) => response,
    (error) => {
      handleCatchError(error);
      return Promise.reject(error);
    }
  );

  return { server };
};

export default useAxios;

