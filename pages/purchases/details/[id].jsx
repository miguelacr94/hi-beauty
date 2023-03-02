import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState } from "react";
import PurchaseData from "../../../core/components/Purchases/PurchaseData";
import PurchaseProducts from "../../../core/components/Purchases/PurchaseProducts";
import NavigateBack from "../../../core/components/shared/NavigateBack";
import MainLayout from "../../../core/layouts/MainLayout";
import PurchaseRepository from "../../../core/repositories/purchase";
import { AppRoutes } from "../../../core/utils/routes";

const PurchaseDetails = () => {

  const router = useRouter();

  const { id } = router.query;
  const [dataDetails, setData] = useState(null);

  const { data, error, isError, isLoading } = useQuery(["purchaseDetails", id],
    () =>
      PurchaseRepository.getPurchaseMeDetails(id),
    {
      enabled: !!id,
      onSuccess: (data) => setData(data?.data),
      onError: (err) => console.error(err),
    }
  );

  if (!id || !dataDetails) return null;



  return (
    <MainLayout>
      <div className="flex flex-col items-start w-full space-y-4">
        <NavigateBack to={AppRoutes.purchases} title="Listado de compras" />
        <div className="grid w-full grid-cols-1 gap-x-10 gap-y-5 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <PurchaseData
              query={router?.query}
              dataDetails={dataDetails}
            />
          </div>
          <div className="lg:col-span-2">
            <PurchaseProducts
              dataDetails={dataDetails}
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PurchaseDetails;
