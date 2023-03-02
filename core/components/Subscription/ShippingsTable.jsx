import { format } from "date-fns";
import useSubscriptions from "../../hooks/queries/userSubcriptions";
import Helpers from "../../utils/helpers";
import Button from "../shared/Button";
import Truck from "../shared/Icons/Truck";
import TableBase from "../shared/Tables/TableBase";
import TableColumn from "../shared/Tables/TableColumn";
import TableRow from "../shared/Tables/TableRow";

const ShippingsTable = () => {

  const { subscriptions } = useSubscriptions();


  return (
    <div className="flex flex-col w-full row-span-2 space-y-4 overflow-y-scroll bg-white rounded-md shadow-sm max-h-160">
      <div className="flex items-center px-4 pt-4 space-x-2">
        <Truck size="1.2em" />
        <h2>Listado de despachos</h2>
       
      </div>
      <div className="flex flex-col space-y-3 items start">
        {subscriptions && subscriptions?.docs?.length > 0 ?
          <TableBase
            headers={["Código", "Fecha de despacho", "Guía de rastreo"]}
            className="shadow-none"
          >
            <tbody className="font-light">
              {subscriptions?.docs?.map((s, i) => (
                <TableRow key={i} data-key={i}>
                  <TableColumn>{s?.code}</TableColumn>
                  <TableColumn className="capitalize">
                    {format(new Date(s?.createdAt), "dd MMMM yyyy")}
                  
                  </TableColumn>
                  <TableColumn>
                    <Button
                      isExternalNavigation
                      route={s?.guide}
                      text="Ver guía"
                    />
                  </TableColumn>
                </TableRow>
              ))}
            </tbody>
          </TableBase>

          :
          <div className="w-full flex justify-center items-center flex-col md:min-h-[200px] min-h-[100px]">
            {/* <Img
                            containerClassName="flex justify-center  max-h-[16rem¡]"
                            src="/assets/images/mano.png"
                            className="object-contain w-full aspect-square max-h-[100px] max-w-[100px]"
                        /> */}
            <span className="text-muted text-md">No hay despachos agregados a tu lista</span>
          </div>

        }

      </div>
    </div>
  );
};

export default ShippingsTable;
