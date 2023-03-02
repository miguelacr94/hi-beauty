import { useRouter } from "next/router";
import useUser from "../../../hooks/useUser";
import { AppRoutes } from "../../../utils/routes";
import Img from "../Img";

const Avatar = () => {
  const { user } = useUser();
  const router = useRouter();

  return (
    <Img
      src='/assets/images/avatar.webp'
      className=" h-full w-full rounded-full "
      containerClassName="border border-white rounded-full w-[35px] h-[35px] bg-white"
      loading="eager"
      decoding="sync"
      // onClick={()=>router.push(AppRoutes.profile)}
    />
  );
};

export default Avatar;
