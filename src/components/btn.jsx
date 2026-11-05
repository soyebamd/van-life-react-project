import classNames from "classnames";

export default function Btn({
  children,
  link,
  btnClass,
  textColor = "text-btnText",
  variant = "bg-simple",
  ...rest
}) {
  // const dynamicClass = { ...rest };

  /*
    --color-simple: #e17654;
  --color-luxury: #161616;
  --color-rugged: #115e59;
  --color-btnText: #ffead0;
  
  */

  const buttonCategory = {
    simple: "bg-simple",
    rugged: "bg-rugged",
    luxury: "bg-luxury",
  };

  const buttonBg = buttonCategory[variant];

  const globalClass =
    "font-semibold rounded-md flex items-center justify-center px-4 text-sm";

  const combineClass = classNames(globalClass, btnClass, textColor, buttonBg);

  return (
    <a href={link} className={combineClass} {...rest}>
      {children}
    </a>
  );
}
