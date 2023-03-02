import { format } from "date-fns";
import usePurchases from "../../hooks/queries/usePurchase";
import Helpers from "../../utils/helpers";
import { AppRoutes } from "../../utils/routes";
import Button from "../shared/Button";
import Box from "../shared/Icons/Box";
import TableBase from "../shared/Tables/TableBase";
import TableColumn from "../shared/Tables/TableColumn";
import TableRow from "../shared/Tables/TableRow";

const PurchasesTable = ({ height = "auto" }) => {
  const { purchases } = usePurchases(true);

  return (
    <div className="flex flex-col row-span-2 space-y-4 overflow-y-scroll bg-white rounded-md shadow-sm max-h-160">
      <div className="flex items-center px-4 pt-4 space-x-2">
        <Box size="1.2em" />
        <h2>Ordenes de compra</h2>
      </div>

      {purchases && purchases?.docs?.length > 0 ?
        <TableBase
          className={height}
          headers={[
            "Código",
            "Fecha de compra",
            "Total",
            "Método de pago",
            "Estado",
            "Acciones",
          ]}
        >


          <tbody className="font-light">
            {purchases && purchases?.docs?.map((p, i) => {
              return (
                <TableRow key={i} data-key={i}>
                  <TableColumn>FV123</TableColumn>
                  <TableColumn className="capitalize">
                    {/* {formatp(p?.createdAt, "dd MMMM yyyy")} */}
                    {p?.createdAt}
                  </TableColumn>
                  <TableColumn className="capitalize">
                    {Helpers.formatCurrency(p?.total)}
                  </TableColumn>
                  <TableColumn className="capitalize">
                    {p?.paymentMethod}
                  </TableColumn>
                  <TableColumn className="capitalize">
                    {p?.status}
                  </TableColumn>
                  <TableColumn>
                    <Button
                      isNavigation
                      route={`${AppRoutes.purchases}/details/${p?._id}`}
                      text="Ver detalle"
                    />
                  </TableColumn>
                </TableRow>
              )
            })}
          </tbody>


        </TableBase>

        :
        <div className="w-full flex justify-center items-center flex-col md:min-h-[200px] min-h-[100px]">
          <span className="text-muted text-md">No hay compras agregadas a tu lista</span>
        </div>
      }
    </div>
  );
};

export default PurchasesTable;
