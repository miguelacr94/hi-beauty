import { useRouter } from "next/router";
import useGreetingTime from "../../../hooks/useGreetingTime";
import useUser from "../../../hooks/useUser";
import { AppRoutes } from "../../../utils/routes";
import Divider from "../Divider";
import Hamburger from "../Icons/Hamburger";
import Img from "../Img";
import NotificationIcon from "../NotificationIcon";
import NotificationsPopup from "../Notifications/NotificationsPopup";
import PopOver from "../PopOver";
import Avatar from "../User/Avatar";
import SuscriptionStatus from "../User/SuscriptionStatus";
import UserPopupOptions from "../User/UserPopupOptions";

const Header = () => {
  const { user, getFirstName } = useUser();
  const greeting = useGreetingTime();
  const router = useRouter();

  return (
    <header className="sticky top-0 left-0 z-10 flex flex-col w-full  
     mb-4 md:px-10 backdrop-blur-md  md:mt-10 bg-secondary pb-4 z-50">
      <div className="bg-primary w-full  flex items-center px-6 min-h-[60px] md:rounded-lg">
        <div className="w-2/6 md:w-3/6  h-full flex items-center ">
          <Hamburger size="2.5em" className="mt-1 md:hidden text-white" />
          <h1 className="text-white text-lg hidden md:block">Hola <span className="capitalize">{user?.firstName} 😄</span>, Bienvenida a Hi Beauty</h1>

        </div>
        <div className="w-2/6 md:w-3/6 block md:hidden">
          <Img
            src={'/assets/images/white.png'}
            containerClassName="flex justify-center "
            className="w-full"
            loading="eager"
            decoding="sync"
            onClick={() => router.push(AppRoutes.home)}

          />
        </div>
        <div className="w-2/6 md:w-3/6 flex space-x-2 justify-end items-center">
          <div className="hidden md:block md:flex  md:justify-end md:items-center w-full">

            <SuscriptionStatus
              className='text-white max-w-[230px]'
            />
            {/* <div className="border-r w-2 h-full  border-white opacity-75" /> */}
            <hr className="w-10 h-[0.5px] opacity-75 bg-white rotate-90" />
          </div>
          <PopOver
            child={<NotificationIcon />}
            content={<NotificationsPopup />}
          />
          <PopOver child={<Avatar />} content={<UserPopupOptions />} />

          {/* <Avatar/> */}

        </div>
      </div>

      { router.pathname != '/purchases' &&
        router.pathname != '/wish-list'
      &&
        <div className="flex block md:hidden flex-col items-center justify-center font-light py-4 w-full pt-6 bg-white opacity-75  ">
          <h3 className="text-2xl font-semibold text-gray-800">
            Hola {user?.firstName},
          </h3>
          <h3 className="text-2xl font-semibold text-gray-800">
            bienvenida a  <span className="text-primary">Hi Beauty</span>
          </h3>

          <h4 className="text-lg text-muted mt-2">
            {/* Hola {user.firstName}, {greeting} */}
            <SuscriptionStatus />
          </h4>
        </div>

      }




      {/* <div className="flex flex-col items-start justify-center w-full p-6 space-y-4 bg-white rounded-md shadow-sm md:space-y-0 lg:items-center lg:flex-row">
        <div className="flex items-start space-x-4 md:space-x-0 md:items-center grow">
          <Hamburger size="1.4em" className="mt-1 md:hidden" />
          <div className="flex flex-col items-start justify-center font-light">
            <h3 className="text-2xl font-semibold text-gray-800">
              Bienvenido a HiBeauty
            </h3>
            <h4 className="text-sm text-muted">
              Hola {user.firstName}, {greeting}
            </h4>
          </div>
        </div>
        <div className="flex items-center justify-end w-full lg:w-auto">
          <SuscriptionStatus />
          <Divider />
          <div className="flex items-center space-x-2 md:space-x-4">
            <PopOver
              child={<NotificationIcon />}
              content={<NotificationsPopup />}
            />
            <PopOver child={<Avatar />} content={<UserPopupOptions />} />
          </div>
        </div>
      </div> */}
    </header>
  );
};

export default Header;
