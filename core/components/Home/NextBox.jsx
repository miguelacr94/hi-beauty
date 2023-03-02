import { format } from "date-fns";
import useUser from "../../hooks/useUser";
import Button from "../shared/Button";
import WhatsApp from "../shared/Icons/Whatsapp";
import Img from "../shared/Img";
import { copiarAlPortapapeles } from '../../utils/helpers'
import toast from "react-hot-toast";
import { useId } from "react";

const NextBox = () => {

  const { user } = useUser();
  const toastId = useId();

  const copiarAlPortapapeles = (id_elemento) => {
    var aux = document.createElement("input");
    console.log(aux);
    aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    toast.success("Código copiado", { id: toastId });
  }

  return (
    <div className="flex lg:flex-row flex-col-reverse items-center justify-center w-full 
     overflow-hidden rounded-xl md:rounded-md  shadow-sm bg-violet md:p-0  pb-10 md:pt-0 pt-6 ">

      <div className="lg:w-8/12 md:pl-10 flex lg:flex-col flex-col-reverse px-6 md:px-0 md:mt0  mt-10 ">
        <div className="flex justify-center items-center ">
          <div className="flex justify-center items-center w-full space-x-5 mt-6 md:mt-0 md:space-y-0">
            <Img
              loading="eager"
              decoding="sync"
              containerClassName="flex justify-center  max-h-[16rem¡]"
              src="/assets/icons/Vector.png"
              className="object-contain w-full aspect-square max-h-[100px] max-w-[100px]"
            />
            <div className="md:space-y-2 space-y-4 text-start w-full" >
              <p className="text-white font-semibold">Invita a tus amigas</p>
              <p className=" text-white font-light text-[14px]">Por cada amiga que refieras, gana
                un producto adicional en tu caja. Y tu amiga también </p>
            </div>
          </div>

        </div>
        <div className="flex flex-col z-10">
          <div className="bg-white  md:px-0 opacity-95  w-full h-12 rounded-lg  items-center mt-[17px] flex  justify-center space-x-12 md:px-8">
            <button
              onClick={() => copiarAlPortapapeles('refererCode')}

              className="flex justify-center px-8 py-2 space-x-1 text-sm font-light  duration-300 
            transform md:scale-105 rounded-md active:scale-95 "
            >
              <span>Código referido:</span>{" "}
              <span id='refererCode' className="font-semibold">{user?.code}</span>
            </button>

          </div>

          <a
            href={`https://wa.me/?text=Inscr%C3%ADbete+a+Hi+Beauty+con+mi+c%C3%B3digo%3A+${user?.code}+y+g%C3%A1nate+un+producto+completamente+gratis%2C+en+tu+primera+cajita.%0D%0A%0D%0Awww.hibeauty.com.co+`}
            target='_blank'
            className="mt-2 md:mt-4 md:mb-4 mb-0 flex  items-center justify-center bg-primary h-12 text-white rounded-lg space-x-1 text-lg"
            h='h-10'

          ><span>Invitar amiga</span><WhatsApp size="1.5rem" /></a>
        </div>


      </div>


      <div className="lg:w-4/12  h-full content-end grid grid-cols-1 gap-1  md:pt-0">
        <Img
          containerClassName=" w-full  flex justify-end items-end max-h-[16rem] hidden md:block "
          src="/assets/images/ladies.png"
          className="object-contain w-full aspect-square  content-end  md:max-h-[300px] max-h-[200px] md:max-w-[300px] max-w-[200px]  right-0  
          transform -translate-x-6 scale-125 "
        />
        <Img
          containerClassName=" w-full  flex justify-end items-end max-h-[16rem] block md:hidden"
          src="/assets/images/ladies.png"
          className="object-contain w-full aspect-square  content-end  md:max-h-[300px] max-h-[200px] md:max-w-[300px] max-w-[200px]  right-0  
          transform translate-y-10 scale-[120%]"
        />
      </div>

    </div>
  );
};

export default NextBox;
