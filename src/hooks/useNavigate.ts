import { useContext } from "react";
import { NavContext } from "@ionic/react";

const useNavigate = () => {
  const { navigate, goBack } = useContext(NavContext);

  const goTo = (
    path: string,
    direction?: "forward" | "back" | "none",
    action: any = "push"
  ) => {
    navigate(path, direction, action);
  };

  return { goTo, goBack };
};

export default useNavigate;
