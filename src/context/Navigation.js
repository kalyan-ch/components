import { createContext, useEffect, useState } from "react";

const NavigationContext = createContext();

const NavigationProvider = ({ children }) => {
  useEffect(() => {
    const eventHandler = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", eventHandler);

    return () => {
      window.removeEventListener("popstate", eventHandler);
    };
  }, []);

  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const navigate = (to) => {
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };

  return (
    <NavigationContext.Provider value={{currentPath, navigate}}>
      {children}
    </NavigationContext.Provider>
  );
};
export { NavigationProvider };
export default NavigationContext;
