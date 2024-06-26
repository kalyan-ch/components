import useNavigation from "../hooks/use-navigation";

const Route = ({ path, children }) => {
  const { currentPath } = useNavigation();

  if (path === currentPath) {
    return children;
  }
};

export default Route;
