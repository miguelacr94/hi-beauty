import { useMutation } from "@tanstack/react-query";
import { useId } from "react";
import toast from "react-hot-toast";
import UserRepository from "../../repositories/user";
import { IS_DEV } from "../../utils/constants";
import useUser from "../useUser";

const useProfile = () => {
  const { update } = useUser();
  const toastId = useId();

  const { error, isError, isLoading, mutateAsync } = useMutation(
    (data) => UserRepository.updateData(data),
    {
      onSuccess: (res) => handleSuccess(res),
      onError: (err) => handleError(err),
    }
  );

  const doUpdate = async (data) => {
    console.log(data);
    try {
      await mutateAsync(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleError = (err) => {
    if (IS_DEV) {
      console.error(err.message);
    }
    toast.error(err.message, { id: toastId });
  };
  const handleSuccess = (data) => {
    if (data && data.success) {
      update(data.data);
      toast.success("Información actualizada", { id: toastId });
    } else {
      handleError("Error al actualizar la información");
    }
  };

  return {
    doUpdate,
    hasError: isError || error,
    isLoading,
  };
};

export default useProfile;
