import Link from "next/link";
import useActiveLink from "../../../hooks/useActiveLink";

const MobileSidebarLink = ({ title, route, icon }) => {
  const { active } = useActiveLink(route);
  return (
    <li className="flex w-full">
      <Link
        href={route}
        passHref
        className={`p-4 text-white duration-500 grow hover:bg-white hover:bg-opacity-10 bg-opacity-50 font-light flex items-center space-x-2 text-lg ${
          active && "bg-white bg-opacity-10"
        }`}>

        {icon}
        <span className="font-light">{title}</span>

      </Link>
    </li>
  );
};

export default MobileSidebarLink;
