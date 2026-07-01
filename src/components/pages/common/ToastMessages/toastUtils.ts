import { toast } from "react-toastify";

const defaultPosition = "top-right";

export const showWarningToast = (message: string) => {
  toast.warning(message, {
    position: defaultPosition,
    autoClose: 3000,
    theme: "colored",
  });
};

export const showErrorToast = (message: string) => {
  toast.error(message, {
    position: defaultPosition,
    autoClose: 3000,
    theme: "colored",
  });
};

export const showSuccessToast = (message: string) => {
  toast.success(message, {
    position: defaultPosition,
    autoClose: 1500,
    theme: "colored",
  });
};
