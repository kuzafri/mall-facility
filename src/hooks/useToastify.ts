import { toast } from "react-toastify";

const useToastify = () => {

  const showToast = (
    type: "info" | "success" | "warning" | "error" | "default",
    message: string,
    timer: number = 3000
  ) => {
    toast(message, {
      type: type,
      autoClose: timer,
      hideProgressBar: false,
      draggable: true,
    });
  };

  return { showToast };
};

export default useToastify;
