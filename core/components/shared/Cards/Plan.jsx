import { useRouter } from "next/router";
import useCheckout from "../../../hooks/useCheckout";
// import useModal from "../../../hooks/useModal";
import useSubscriptionForm from "../../../hooks/useSubscriptionForm";
import Helpers from "../../../utils/helpers";
import Button from "../Button";
import Box from "../Icons/Box";
import Contract from "../Icons/Contract";
import Gift from "../Icons/Gift";
import { Annual, BiAnnual, Monthly, Quarterly } from "../Icons/Plans";
import Truck from "../Icons/Truck";
// import SoldOut from "../SoldOut/SoldOut";

const Plan = ({ id, title, price, discount, recurrent, items = [], isHot }) => {
  // const { open } = useModal();

  const router = useRouter();
  const { setData, data } = useSubscriptionForm();
  const { updateCheckout } = useCheckout();

  // const selectPlan = () => {
  //   open(<SoldOut />);
  //   // setData({ ...data, plan: { id, title, price } });
  //   // updateCheckout({ ...data });
  //   // router.push(AppRoutes.survey);
  // };

  const getItemIcon = (name) => {
    switch (name) {
      case "box":
        return <Box />;
      case "truck":
        return <Truck />;
      case "gift":
        return <Gift />;
      case "paper":
        return <Contract />;
      default:
        return null;
    }
  };

  const getPlanIcon = (name) => {
    switch (name) {
      case "Mensual":
        return <Monthly />;
      case "Trimestral":
        return <Quarterly />;
      case "Semestral":
        return <BiAnnual />;
      case "Anual":
        return <Annual />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`flex items-center justify-center w-full h-full p-[2px] shadow-md rounded-md relative ${isHot
        ? "bg-gradient-to-b from-secondary to-primary transform hover:scale-105 duration-300"
        : "bg-white"
        }`}
    >
      {isHot && (
        <div className="absolute z-10 transform -translate-x-1/2 -top-3.5 font-light italic left-1/2 bg-gradient-to-r from-secondary to-primary py-0.5 px-5 rounded-md text-white text-lg">
          Recomendado
        </div>
      )}
      <div className="relative flex flex-col items-center justify-center w-full p-5 space-y-5 bg-white rounded-md">
        {discount > 0 && (
          <div className="absolute -right-[2px] rounded-r-[2px] px-4 py-1 text-sm italic font-light text-white rounded-l-xl top-5 bg-primary">
            <span className="font-semibold">{discount * 100}%</span> <br />
            OFF
          </div>
        )}
        <div className="p-3 text-3xl rounded-full bg-primary bg-opacity-60">
          {getPlanIcon(title)}
        </div>
        <div className="flex flex-col items-center ">
          <h5 className="text-2xl font-light">{title}</h5>
          <span className="text-xl font-semibold">
            {Helpers.formatCurrency(price)}
          </span>
          {recurrent > 1 && (
            <span className="text-base font-light">
              {Helpers.formatCurrency(price / recurrent)} / Mensual
            </span>
          )}
        </div>
        <div className="flex flex-col w-full space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center w-full space-x-2 font-light text-gray-600"
            >
              <span className="text-lg">{getItemIcon(item.icon)}</span>
              <span className="text-base">{item.content}</span>
            </div>
          ))}
        </div>
        <Button
          text="Únete"
          // onClick={selectPlan}
          className={`justify-center w-full text-lg font-light ${isHot ? "plan-hot-btn plan-btn" : ""
            }`}
        />
      </div>
    </div>
  );
};

export default Plan;
