import { format } from "date-fns";
import Helpers from "../../utils/helpers";
import Box from "../shared/Icons/Box";
import Truck from "../shared/Icons/Truck";
import usePurchases from "../../hooks/queries/usePurchase";
import PurchaseRepository from "../../repositories/purchase";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import * as moment from 'moment';
import addDays from 'date-fns/addDays'

const PurchaseData = ({ dataDetails }) => {
  // const router = useRouter();
  // const { id } = router.query;
  // const [dataDetails, setData] = useState(null);

  // const { data, error, isError, isLoading } = useQuery(["purchaseDetails", id],
  //   () =>
  //     PurchaseRepository.getPurchaseMeDetails(id),
  //   {
  //     enabled: !!id,
  //     onSuccess: (data) => setData(data?.data),
  //     onError: (err) => console.error(err),
  //   }
  // );

  // if (!id || !dataDetails) return null;

  // addDays(date, amount)

  return (
    <div className="flex flex-col w-full p-4 space-y-4 bg-white rounded-md shadow-sm max-h-96">
      <div className="flex flex-col w-full divide-y">
        <div className="flex items-start pb-4 space-x-2">
          <Box size="1.2em" className="mt-0.5" />
          <div className="flex flex-col items-start justify-center">
            <h2 className="font-semibold">Pedido #{dataDetails?.code}</h2>
            <span className="text-sm font-light text-muted">
              Realizado el{" "}
              {/* {format(new Date(), "EEEE d 'de' MMMM, yyyy")} */}
              {format(new Date(dataDetails?.createdAt), "EEEE d 'de' MMMM, yyyy")}
              {/* {moment(dataDetails?.createdAt).format('lll')} */}
            </span>
          </div>
        </div>
        <div className="flex items-start pt-4 space-x-2">
          <Truck size="1.2em" className="mt-0.5" />
          <div className="flex flex-col items-start justify-center">
            <h2 className="font-semibold">Fecha estimada de entrega</h2>
            <span className="text-sm font-light text-muted">
              Estimado el{" "}
              {format(new Date(dataDetails?.delivery ? dataDetail?.delivery : null), "EEEE d 'de' MMMM, yyyy")}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full space-y-2 text-xs text-muted">
        <div className="flex justify-between w-full py-2 border-b border-muted border-opacity-10">
          <span>Método de pago:</span>
          <span className="capitalize">{dataDetails?.paymentMethod?.toUpperCase()}</span>
        </div>
        <div className="flex justify-between w-full py-2 border-b border-muted border-opacity-10">
          <span>Cupón:</span>
          <span>{dataDetails?.coupon?.code}</span>
        </div>
        <div className="flex justify-between w-full py-2 border-b border-muted border-opacity-10">
          <span>En caja:</span>
          <span>{dataDetails?.box === true ? 'Si' : 'No'}</span>
        </div>
        <div className="flex justify-between w-full py-2 border-b border-muted border-opacity-10">
          <span>Costo de envío:</span>
          <span>{Helpers.formatCurrency(dataDetails?.sendPrice ? dataDetails?.sendPrice : 0)}</span>
        </div>
        <div className="flex justify-between w-full py-2 border-b border-muted border-opacity-10">
          <span>Total pagado:</span>
          <span>{Helpers.formatCurrency(dataDetails?.total ? dataDetails?.total : 0)}</span>
        </div>
      </div>
    </div>
  );
};

export default PurchaseData;
