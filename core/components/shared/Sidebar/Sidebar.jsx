import { APP_LOGO } from "../../../utils/constants";
import { primaryLinks } from "../../../utils/routes";
import Img from "../Img";
import SidebarLink from "./SidebarLink";

const Sidebar = () => {
  return (
    <header className="relative flex flex-col w-0 duration-300 bg-white shadow-lg -left-full md:w-96 max-w-[24rem] md:left-0">
      <Img
        src={APP_LOGO}
        containerClassName="flex justify-center p-8"
        className="w-4/5"
        loading="eager"
        decoding="sync"
      />
      <nav className="flex flex-col grow">
        <ul className="w-full grow">
          {primaryLinks.map((link, index) => (
            <SidebarLink
              key={index}
              title={link.title}
              route={link.route}
              icon={link.icon}
            />
          ))}
        </ul>
        <div className="flex flex-col items-center w-full px-2 py-5 space-y-2 
        text-sm font-light text-gray-200">
          <div className="w-full h-[1px] bg-gray-100" />
          <span>HiBeauty &copy; {new Date().getFullYear()}</span>
        </div>
      </nav>
    </header>
  );
};

export default Sidebar;
