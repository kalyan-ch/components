import classNames from "classnames";
import useNavigation from "../hooks/use-navigation";

const Link = ({ to, children, className, activeClassName }) => {
  const { currentPath, navigate } = useNavigation();

  const handleClick = (e) => {
    if (e.ctrlKey || e.metaKey) {
      return;
    }
    e.preventDefault();
    navigate(to);
  };

  const classes = classNames('text-blue-500', className, currentPath === to && activeClassName);

  return (
    <a onClick={handleClick} className={classes} href={to}>
      {children}
    </a>
  );
};

export default Link;
