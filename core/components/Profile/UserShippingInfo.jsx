import { format } from "date-fns";
import useUser from "../../hooks/useUser";
import Helpers from "../../utils/helpers";
import Truck from "../shared/Icons/Truck";
import Warn from "../shared/Icons/Warn";
import UserShippingInfoForm from "./UserShippingInfoForm";

const UserShippingInfo = () => {
  const { dateAddress } = useUser();


  console.log(Helpers.dateCalcule(format(new Date(dateAddress ? dateAddress : null), "yyyy-MM-dd"),(format(new Date(), "yyyy-MM-dd"))))

  return (
    <div className="flex flex-col w-full row-span-2 space-y-4 overflow-y-scroll md:overflow-y-hidden bg-white rounded-md shadow-sm max-h-160">
      <div className="flex items-center px-4 pt-4 space-x-2">
        <Truck size="1.2em" />
        <h2>Datos de envío</h2>
      </div>
      <UserShippingInfoForm />
      <div className="flex items-start justify-center p-4 space-x-2 font-light text-start text-muted">
        <Warn />
        {Helpers.dateCalcule(format(new Date(dateAddress ? dateAddress : null), "yyyy-MM-dd"),(format(new Date(), "yyyy-MM-dd"))) < 10 ?
          <span className="text-xs">
            Podrás actualiza tu información de envío dentro de
            {` ${10 - Helpers.dateCalcule(format(new Date(dateAddress), "yyyy-MM-dd"),
              (format(new Date(), "yyyy-MM-dd")))} `}  día(s).
          </span>

          :
          <span className="text-xs">
            Una vez actualizados los datos de envió tendrás que esperar nuevamente 10 días para realizar un nuevo cambio
          </span>
        }
      </div>
    </div>
  );
};

export default UserShippingInfo;
