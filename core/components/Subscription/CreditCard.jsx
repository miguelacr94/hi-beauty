import Helpers from "../../utils/helpers";
import Img from "../shared/Img";

const CreditCard = ({ values, defaultData }) => {


  return (
    <div className="relative w-full h-56 m-auto text-white transition-transform transform bg-red-100 shadow-lg max-w-[24rem] rounded-xl hover:scale-105">
      <Img
        className="relative object-cover w-full h-full rounded-xl"
        src="https://i.imgur.com/kGkSg1v.png"
      />

      <div className="absolute w-full px-8 top-8">
        <div className="flex justify-between">
          <CreditCardItem title="Nombre" value={values?.cardHolder || defaultData?.cardHolder} />
          <Img
            className="w-14 h-14"
            decoding="sync"
            loading="eager"
            src="https://i.imgur.com/bbPHJVe.png"
          />
        </div>
        <CreditCardItem title="Número de tarjeta" value={values?.number || `**** **** **** ${defaultData?.last4}`} />
        <div className="pt-6 pr-6">
          <div className="flex justify-between">
            <CreditCardItem
              title="Fecha de expiración"
              value={Helpers.changeExpiredFormat_(defaultData?.expiration?.month, defaultData?.expiration?.year) || values?.expiryDate}
            />
            <CreditCardItem title="CVV" value={values?.cvv} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;

const CreditCardItem = ({ title, value }) => {
  return (
    <div>
      <p className="text-xs font-light">{title}</p>
      <p className="font-medium tracking-wider">{value}</p>
    </div>
  );
};
