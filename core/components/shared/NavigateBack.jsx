import Link from "next/link";
import { ArrowBack } from "./Icons/Arrows";

const NavigateBack = ({ to, title = "Atrás", action }) => {
  if (!to)
    throw new Error("to must be provided in order to know where to navigate");
  return (
    <div className="flex items-center justify-between w-full">
      <Link
        href={to}
        passHref
        className="flex items-center space-x-2 font-light text-gray-800">

        <ArrowBack size="1.2em" />
        <span className="text-base">{title}</span>

      </Link>
      {action}
    </div>
  );
};

export default NavigateBack;
