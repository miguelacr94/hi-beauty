import dynamic from "next/dynamic";
import PurchasesTable from "../../core/components/Purchases/PurchasesTable";
import Img from "../../core/components/shared/Img";
import PaymentTable from "../../core/components/Subscription/PaymentTable";
import ShippingsTable from "../../core/components/Subscription/ShippingsTable";
import usePurchases from "../../core/hooks/queries/usePurchase";
import useSubscriptions from "../../core/hooks/queries/userSubcriptions";
import useUser from "../../core/hooks/useUser";
import MainLayout from "../../core/layouts/MainLayout";


const SubscriptionData = dynamic(() => import("../../core/components/Subscription/SubscriptionData"), {
  ssr: false,
});


const Subscription = () => {

  const { purchaseSubscriptions } = useSubscriptions();

  return (
    <MainLayout>
      <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2">
        {/* <SubscriptionData /> */}
        {/* <ShippingsTable /> */}
      </div>
      <div className="mt-8">

     
          {/* <PaymentTable /> */}
         
        
      </div>
    </MainLayout>
  );
};

export default Subscription;
