import classNames from "classnames";

export default function Btn({ children, link, btnClass, ...rest }) {
  // const dynamicClass = { ...rest };

  const globalClass =
    "font-bold rounded-md flex items-center justify-center px-4";

  const combineClass = classNames(globalClass, btnClass);

  return (
    <a href={link} className={combineClass} {...rest}>
      {children}
    </a>
  );
}
