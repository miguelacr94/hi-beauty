import Link from "next/link";
import useActiveLink from "../../../hooks/useActiveLink";

const SidebarLink = ({ title, route, icon }) => {
  const { active } = useActiveLink(route);
  return (
    <li className="flex w-full">
      <Link
        href={route}
        passHref
        className={`px-4 py-3 text-gray-600 duration-500 hover:text-gray-800 grow hover:bg-secondary font-light flex items-center space-x-2 ${
          active && "bg-secondary"
        }`}>

        {icon}
        <span>{title}</span>

      </Link>
    </li>
  );
};

export default SidebarLink;
