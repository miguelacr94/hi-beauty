import Rocket from "../shared/Icons/Rocket";
import SubscriptionPlanTile from "./SubscriptionPlanTile";

const SubscriptionPlans = () => {
  return (
    <div className="flex flex-col items-start justify-start p-4 space-y-4 bg-white rounded-md shadow-sm">
      <div className="flex items-center space-x-2">
        <Rocket size="1.2em" />
        <h2>Actualiza tu suscripción</h2>
      </div>
      <div className="flex flex-col w-full">
        <SubscriptionPlanTile title="Plan Mensual" />
        <SubscriptionPlanTile title="Plan Trimestral" />
        <SubscriptionPlanTile title="Plan Semestral" />
        <SubscriptionPlanTile title="Plan Anual" />
      </div>
    </div>
  );
};

export default SubscriptionPlans;
