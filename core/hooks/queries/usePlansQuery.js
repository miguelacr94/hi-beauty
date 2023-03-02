import { useQuery } from "@tanstack/react-query";
import { useId } from "react";
import toast from "react-hot-toast";
import SubscriptionsRepository from "../../repositories/subscripsions";

const usePlansQuery = () => {
  const toastId = useId();

  const { data, error, isError, isLoading } = useQuery(
    ["plans"],
    SubscriptionsRepository.getPlans,
    {
      onError: (err) => handleError(err),
    }
  );

  const handleError = (err) => {
    console.error(err.message);
    toast.error(`${err.message} 😖`, { id: toastId });
  };

  return {
    plans: data ?? [],
    hasError: isError || error,
    isLoading,
  };
};

export default usePlansQuery;
