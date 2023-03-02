import Link from "next/link";
import Spinner from "../shared/Spinner";

const Button = ({
  text,
  icon,
  className = "",
  isNavigation = false,
  isExternalNavigation = false,
  onClick,
  type = "button",
  isLoading = false,
  route,
  h,
  disabled
}) => {
  if (!text) throw new Error("Text must be provided");
  if (isNavigation && !route)
    throw new Error("route must be provided for navigation buttons");

  const child = (
    <>
      {icon && icon}
      {isLoading ? <Spinner className="w-4" /> : <span>{text}</span>}
    </>
  );

  if (isNavigation) {
    return (
      (<Link
        href={route}
        passHref
        className={`inline-flex items-center text-sm py-1 text-center text-white duration-300 rounded-md bg-primary whitespace-nowrap hover:bg-primary-dark space-x-1 px-3 ${className}`}>

        {child}

      </Link>)
    );
  }

  if (isExternalNavigation) {
    return (
      <a
        href={route}
        target="_blank"
        rel="noreferrer"
        className={`inline-flex items-center text-sm py-1 text-center text-white duration-300 rounded-md bg-primary whitespace-nowrap hover:bg-primary-dark space-x-1 px-3 ${className}`}
      >
        {child}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={` ${h ? h : 'h-7'} max-h-10 min-h-[1.75rem] transition-all  flex items-center text-sm py-1 text-center text-white duration-300 rounded-md disabled:opacity-75 bg-primary whitespace-nowrap hover:bg-primary-dark space-x-1 px-3 ${className}`}
    >
      {child}
    </button>
  );
};

export default Button;


export const OutlinedButton = ({
  text,
  icon,
  className = "",
  isNavigation = false,
  isExternalNavigation = false,
  onClick,
  type = "button",
  isLoading = false,
  route,
}) => {
  if (!text) throw new Error("Text must be provided");
  if (isNavigation && !route)
    throw new Error("route must be provided for navigation buttons");

  const child = (
    <>
      {icon && icon}
      {isLoading ? <Spinner className="w-4" /> : <span>{text}</span>}
    </>
  );

  if (isNavigation) {
    return (
      (<Link
        href={route}
        passHref
        className={`max-h-10 min-h-[2.5rem] transition-all h-10 flex items-center text-[18px] py-1 text-center text-current duration-300 rounded-md whitespace-nowrap space-x-1 ring-1 ring-current group ${className}`}>

        {child}

      </Link>)
    );
  }

  if (isExternalNavigation) {
    return (
      <a
        href={route}
        target="_blank"
        rel="noreferrer"
        className={`max-h-10 min-h-[2.5rem] transition-all h-10 flex items-center text-[18px] py-1 text-center text-current duration-300 rounded-md whitespace-nowrap space-x-1 ring-1 ring-current group ${className}`}
      >
        {child}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      type={type}
      className={`max-h-10 min-h-[2.5rem] transition-all h-10 flex items-center text-[18px] py-1 text-center text-current duration-300 rounded-md whitespace-nowrap space-x-2 ring-1 ring-current group ${className}`}
    >
      {child}
    </button>
  );
};
