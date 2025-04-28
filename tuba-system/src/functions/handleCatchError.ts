import { AxiosError } from "axios";

export const handleCatchError = (error: unknown) => {
  if (error instanceof AxiosError) {
    console.error("Axios Error:", error.response?.data || error.message);
  } else if (error instanceof Error) {
    console.error("General Error:", error.message);
  } else {
    console.error("Unknown Error:", error);
  }
};