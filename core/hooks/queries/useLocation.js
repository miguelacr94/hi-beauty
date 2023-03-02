import { useQuery } from "@tanstack/react-query";
import { useId } from "react";
import toast from "react-hot-toast";
import LocationRepository from "../../repositories/location";
import { IS_DEV } from "../../utils/constants";

const useLocation = () => {
  const toastId = useId();

  const { data, error, isError, isLoading } = useQuery(
    ["departments"],
    LocationRepository.getDepartments,
    {
      onError: (err) => handleError(err),
    }
  );

  const handleError = (err) => {
    if (IS_DEV) {
      console.error(err.message);
    }
    toast.error(err.message, { id: toastId });
  };

  return {
    departments: data,
    hasError: isError || error,
    isLoading,
  };
};

export default useLocation;
