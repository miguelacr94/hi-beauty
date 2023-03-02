import Paymethod from "../../core/components/Subscription/Paymethod";
import SubscriptionPlans from "../../core/components/Subscription/SubscriptionPlan";
import MainLayout from "../../core/layouts/MainLayout";

const SubscriptionEdit = () => {
  return (
    <MainLayout>
      <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2">
        <SubscriptionPlans />
        <Paymethod />
      </div>
    </MainLayout>
  );
};

export default SubscriptionEdit;
