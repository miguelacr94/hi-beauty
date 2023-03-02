import dynamic from "next/dynamic";
import { useEffect } from "react";
import MobileSidebar from "../components/shared/Sidebar/MobileSidebar";
import Sidebar from "../components/shared/Sidebar/Sidebar";
import Wrapper from "../components/shared/Wrapper";
import useSubscriptions from "../hooks/queries/userSubcriptions";
import useUser from "../hooks/useUser";

const Header = dynamic(() => import("../components/shared/Header/Header"), {
  ssr: false,
});

const RouletteModal = dynamic(() => import("../components/Roulette/Modal"), {
  ssr: false,
});

const MainLayout = ({ children }) => {
  const { setDate } = useUser();
  // const { dateDispatch } = useSubscriptions();

  // useEffect(() => {
  //   setDate(dateDispatch);
  // });

  return (
    <div className="flex w-screen h-screen bg-secondary">
      <Sidebar />
      <MobileSidebar />
      <RouletteModal />
      <div className="flex flex-col w-full max-h-screen overflow-scroll overflow-x-hidden">
        <Wrapper className="flex-col">
          <Header />
          <div className="px-4 py-4 md:px-10 grow pb-12">{children}</div>
        </Wrapper>
      </div>
    </div>
  );
};

export default MainLayout;
