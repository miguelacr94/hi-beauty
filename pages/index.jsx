import { useAtom } from "jotai";
import { useEffect } from "react";
import { rouletteModalAtom } from "../core/atoms/roulette-modal";
import InviteFriend from "../core/components/Home/InviteFriend";
import NextBox from "../core/components/Home/NextBox";
import Button from "../core/components/shared/Button";
import useUser from "../core/hooks/useUser";
import MainLayout from "../core/layouts/MainLayout";
import { SHOW_ROULETTE } from "../core/utils/constants";

const Home = () => {
  const { user } = useUser();
  // const [_, openRouletteModal] = useAtom(rouletteModalAtom);

  // useEffect(() => {
  //   if (SHOW_ROULETTE) {
  //     setTimeout(() => {
  //       openRouletteModal(true);
  //     }, 3000);
  //   }
  // }, [openRouletteModal]);

  return (
    <MainLayout>
      <div className="flex flex-col items-start justify-start w-full space-y-4">
        <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2 ">
          <InviteFriend user={user} />
          <NextBox />
        </div>
        <div className="bg-violet p-8 rounded-lg text-white grid md:w-3/6 w-full space-y-4 ">
          <span>¿Quieres adquirir tu cajita?</span>
          <span>
            <Button
              text="Adquiérala aquí"
              className="px-8 text-lg"
              h="h-10"
              isExternalNavigation
              route="https://hibeauty.com.co/join-us"
            />
          </span>
        </div>
        {/* <AddMoreToBox /> */}
      </div>
    </MainLayout>
  );
};

export default Home;
