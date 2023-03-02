import { useId } from "react";
import toast from "react-hot-toast";
import useCopyToClipboard from "../../hooks/useCopyToClipboard";
import Strings from "../../utils/strings";
import Gift from "../shared/Icons/Gift";
import Img from "../shared/Img";

const InviteFriend = ({ user }) => {
  const toastId = useId();
  const { copy } = useCopyToClipboard();


  const handleCopyReferCode = () => {
    copy("ANDRES10");
    toast.success(Strings.copiedToClipboard, { id: toastId });
  };


  return (

    <div className="bg-primary w-full flex md:px-8 pl-6 space-x-2 md:rounded-md rounded-xl  md:order-first order-last">
      <div className="md:w-3/6 w-4/6  flex flex-col items-start justify-center md:space-y-4 space-y-2 py-4 md:py-0">
        <h2 className=" text-white md:max-w-[200px] text-[25px] font-light  ">Tu próxima caja llegará entre el</h2>
        <div className="bg-white min-w-[200px] max-w-[270px]  p-3 min-h-14 rounded-xl flex justify-center items-center font-light">
          <span className="text-grey-400 italic ">{user?.subscription?.limit ? user?.subscription?.limit : 'Aun no tiene fecha de entrega'}</span>
          {/* <span className="text-grey-400 italic ">{'Tu cajita llegara antes del 24 de diciembre'}</span> */}

        </div>
      </div>
      <div className="md:w-3/6 w-3/6 h-full flex items-end justify-end ">
        <Img
          containerClassName="flex justify-center  md:max-h-[16rem¡] hidden md:block"
          src="/assets/images/box.png"
          className="object-contain w-full aspect-square 
           pt-10 md:max-h-[300px]
            md:max-w-[300px] 
            max-h-[400px] 
            max-w-[400px] scale-[130%] transform -translate-y-[21.5px] -translate-x-3 md:translate-x-8   md:translate-y-0  md:scale-100 "

        />
        <Img
          containerClassName="flex justify-center  md:max-h-[16rem¡]"
          src="/assets/images/box.png"
          className="object-contain w-full aspect-square 
           pt-10  
            max-h-[200px] 
            max-w-[200px] scale-[95%] transform -translate-y-[21.5px] translate-x-1   md:translate-y-0  md:scale-100 block md:hidden"

        />
      </div>
    </div>

  );
};

export default InviteFriend;
