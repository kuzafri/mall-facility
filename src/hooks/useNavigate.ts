import { useContext } from "react";
import { NavContext } from "@ionic/react";
import { useHistory } from "react-router";

const useNavigate = () => {
  const { navigate } = useContext(NavContext);
  const history = useHistory();

  const goTo = (
    path: string,
    direction?: "forward" | "back" | "none",
    action: any = "push"
  ) => {
    navigate(path, direction, action);
  };

  const asyncGoTo = async (
    path: string,
    direction?: "forward" | "back" | "none",
    action: any = "push",
    cb?: any
  ) => {
    await new Promise((resolve, reject) => {
      if (path.trim().length > 0) {
        navigate(path, direction, action);
        resolve("success");
      } else {
        reject("error");
      }
    });

    if (typeof cb === "function") cb();
  };

  const goBack = () => {
    history.goBack();
  };

  return { goTo, goBack, asyncGoTo };
};

export default useNavigate;
