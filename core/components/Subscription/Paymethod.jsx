import { useEffect, useState } from "react";
import useSubscriptions from "../../hooks/queries/userSubcriptions";
import Card from "../shared/Icons/Card";
import CreditCard from "./CreditCard";
import PaymethodForm from "./PaymethodForm";

const Paymethod = () => {

  const { creditCard } = useSubscriptions();


  const [paymethodData, setPaymethodData] = useState({
  });


  


  const handleChange = (data) => {
    setPaymethodData(data);
  };


  // useEffect(() => {
  //   setPaymethodData(creditCard);
  // }, []);


  return (
    <div className="flex flex-col w-full p-4 space-y-4 bg-white rounded-md shadow-sm">
      <div className="flex items-center space-x-2">
        <Card size="1.2em" />
        <h2>Actualiza tus datos de pago</h2>
      </div>
      <div className="space-y-10 flex-flex-col-w-full">
        <CreditCard values={paymethodData} defaultData={creditCard} />
        <PaymethodForm value={paymethodData} defaultValues={creditCard} onChange={handleChange} />
      </div>
    </div>
  );
};

export default Paymethod;
