import { useRouter } from "next/router";
import PurchasesTable from "../../core/components/Purchases/PurchasesTable";
import Img from "../../core/components/shared/Img";
import usePurchases from "../../core/hooks/queries/usePurchase";
import MainLayout from "../../core/layouts/MainLayout";

const Purchases = () => {

  const { purchases } = usePurchases(true);
  return (
    <MainLayout>

      <PurchasesTable />

    </MainLayout>
  );
};

export default Purchases;
