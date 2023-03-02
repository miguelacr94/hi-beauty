import useMobileMenu from "../../../hooks/useMobileMenu";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import useRouteChange from "../../../hooks/useRouteChange";
import { APP_LOGO_WHITE } from "../../../utils/constants";
import { primaryLinks } from "../../../utils/routes";
import Close from "../Icons/Close";
import Img from "../Img";
import MobileSidebarLink from "./MobileSidebarLink";

const MobileSidebar = () => {
  const { isOpen, close } = useMobileMenu();
  const { ref } = useOnClickOutside(() => close());
  useRouteChange(() => setTimeout(() => close()));

  return (
    <header
      ref={ref}
      className={`fixed top-0 z-[60] flex flex-col w-full h-full sm:w-2/5 bg-primary md:hidden duration-300 shadow-2xl ${
        isOpen ? "left-0" : "-left-full"
      }`}
    >
      {/* <Img
        src={APP_LOGO_WHITE}
        containerClassName="flex justify-center p-8"
        className="w-4/5"
        loading="eager"
        decoding="sync"
      /> */}
      
      <nav className="flex flex-col grow mt-[40px]">
        <div className="flex justify-between pr-12 items-start justify-center">
        <h1 className="font-semibold text-2xl pb-8 ml-4 text-white ">Menú</h1>
        <Close 
        className='text-white '
        size={'2rem'}
        onClick={close}
        />
        </div>
      
        <ul className="w-full grow">
          {primaryLinks.map((link, index) => (
            <MobileSidebarLink
              key={index}
              title={link.title}
              route={link.route}
              icon={link.icon}
            />
          ))}
        </ul>
        <div className="flex flex-col items-center w-full px-2 py-5 
        space-y-2 text-sm font-light text-white">
          <div className="w-full h-[1px] bg-white" />
          <span>HiBeauty &copy; {new Date().getFullYear()}</span>
        </div>
      </nav>
    </header>
  );
};

export default MobileSidebar;
