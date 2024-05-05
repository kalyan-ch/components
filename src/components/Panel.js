import classNames from "classnames";

const Panel = ({ children, classes, ...rest }) => {
  const finalClasses = classNames("p-2 border rounded shadow w-full", classes);

  return (
    <div className={finalClasses} {...rest}>
      {children}
    </div>
  );
};

export default Panel;
