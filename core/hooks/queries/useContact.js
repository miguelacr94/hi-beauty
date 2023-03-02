import { useMutation } from "@tanstack/react-query";
import { useId } from "react";
import toast from "react-hot-toast";
import ContactRepository from "../../repositories/contact";
import { IS_DEV } from "../../utils/constants";

const useContact = () => {
  const toastId = useId();

  const { error, isError, isLoading, mutateAsync } = useMutation(
    (data) => ContactRepository.sendContact(data),
    {
      onSuccess: (res) => handleSuccess(res),
      onError: (err) => handleError(err),
    }
  );

  const doSendContact = async (data) => {
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
    if (data) {
      toast.success("Mensaje enviado", { id: toastId });
    } else {
      handleError("Error al enviar el mensaje");
    }
  };

  return { doSendContact, hasError: isError || error, isLoading };
};

export default useContact;
