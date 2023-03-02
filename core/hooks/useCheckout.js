import { useAtom } from "jotai";
import { useEffect } from "react";
import { checkoutAtom } from "../atoms/checkout";
import useSubscriptionForm from "./useSubscriptionForm";

const useCheckout = (initialData) => {
  const [checkout, setCheckout] = useAtom(checkoutAtom);
  const { data, reset: resetSubscriptionForm } = useSubscriptionForm();

  const updateCheckout = (d) => {
    setCheckout({ ...checkout, ...d });
  };

  const reset = () => {
    resetSubscriptionForm();
    setCheckout(null);
  };

  useEffect(() => {
    setCheckout({ ...checkout, ...data });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    if (initialData) {
      setCheckout({ ...initialData });
    }
  }, [initialData, setCheckout]);

  return { checkout, updateCheckout, reset };
};

export default useCheckout;
