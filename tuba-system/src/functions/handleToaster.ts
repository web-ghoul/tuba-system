import { toast } from "react-hot-toast";

type ToastType = "success" | "error" | "loading" | "info";

export const handleToaster = (message: string, type: ToastType = "success") => {
  switch (type) {
    case "success":
      toast.success(message);
      break;
    case "error":
      toast.error(message);
      break;
    case "loading":
      toast.loading(message);
      break;
    case "info":
    default:
      toast(message);
      break;
  }
};
