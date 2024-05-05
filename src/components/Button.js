import classNames from "classnames";

const Button = ({
  rounded,
  outline,
  primary,
  secondary,
  success,
  warning,
  danger,
  children,
}) => {
  const finalClassName = classNames(
    "flex items-center px-3 py-1.5 border mt-3",
    {
      "text-white": !outline && !secondary,
      "bg-blue-500 border-blue-600": primary,
      "bg-green-500 border-green-600": success,
      "bg-red-500 border-red-600": danger,
      "bg-orange-500 border-orange-600": warning,
      "bg-white": outline,
      "rounded-full": rounded,
    }
  );
  return <button className={finalClassName}>{children}</button>;
};

Button.propTypes = {
  checkUniqueVariation: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      return new Error("Use just one of variation apps");
    }
  },
};

export default Button;
