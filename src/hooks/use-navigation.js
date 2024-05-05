import NavigationContext from "../context/Navigation";
import { useContext } from "react";

const useNavigation = () => {
  return useContext(NavigationContext);
};

export default useNavigation;
