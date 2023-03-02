import { useQuery } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useId } from "react";
import toast from "react-hot-toast";
import AuthRepository from "../../repositories/auth";
import SubscriptionsRepository from "../../repositories/subscripsions";
import { IS_DEV } from "../../utils/constants";
import { AppRoutes } from "../../utils/routes";
import useUser from "../useUser";

const useAuth = () => {
  const router = useRouter();
  const { login } = useUser();

  const toastId = useId();

  const { error, isError, isLoading, mutateAsync } = useMutation(
    (data) => AuthRepository.login(data),
    {
      onSuccess: (res) => handleSuccess(res),
      onError: (err) => handleError(err),
    }
  );

  const { errorSendEmail, isErrorSendEmail, isLoadingSendEmail, mutateAsync: sendAsyncEmail } = useMutation(
    (data) => AuthRepository.sendEmail(data),
    {
      onSuccess: (res) => handleSuccessSendEmail(res),
      onError: (err) => handleErrorSendEmail(err),
    }
  );

  const { errorSendNewPass, isErrorNewPass, isLoadingNewPass, mutateAsync: sendAsyncNewPass } = useMutation(
    (data) => AuthRepository.sendNewPassword(data),
    {
      onSuccess: (res) => handleSuccessSendNewPass(res),
      onError: (err) => handleErrorSendNewPass(err),
    }
  );

  const { errorSendQuestion, isErrorQuestion, isLoading: isLoadingQuestion, mutateAsync: sendAsyncQuestion } = useMutation(
    (data) => SubscriptionsRepository.updateQuestion(data),
    {
      onSuccess: (res) => handleSuccessSendQuestion(res),
      onError: (err) => handleErrorSendQuestion(err),
    }
  );

  const { isLoading: isLoadingAuthWithToken, mutateAsync: authWithToken } = useMutation(
    (token) => AuthRepository.getDataMe(token),
    {
      onError: (_) => handleError({ message: "Información inválida" }),
    }
  );





  // functions 




  const doLogin = async (data) => {
    try {
      await mutateAsync(data);
    } catch (err) {
      console.error(err);
    }
  };


  const doSendEmail = async (data) => {
    try {
      const res = await sendAsyncEmail(data);
      if (res) {
        return res;
      }
    } catch (err) {
      console.error(err)
    }
  }

  const doSendNewPass = async (data) => {

    try {
      const res = await sendAsyncNewPass(data);
      if (res) {
        return res;
      }
    } catch (err) {
      console.error(err);
    }
  }

  const doQuestion = async (data) => {

    try {
      const res = await sendAsyncQuestion(data);
      if (res) {
        return res
      }
    } catch (err) {
      console.log(err)
    }
  }


  //----------------------------------------------//

  const handleError = (err) => {
    if (IS_DEV) {
      console.error(err.message);
    }
    toast.error(err.message, { id: toastId });
  };

  const handleErrorSendEmail = (err) => {
    if (IS_DEV) {
      console.error(err.message);
    }
    toast.error(err.message, { id: toastId });
  };

  const handleErrorSendNewPass = (err) => {
    if (IS_DEV) {
      console.error(err.message);
    }
    toast.error(err.message, { id: toastId });
  };
  const handleErrorSendQuestion = (err) => {
    if (IS_DEV) {
      console.error(err.message);
    }
    toast.error(err.message, { id: toastId });
  };






  const handleSuccess = (data) => {
    const res = login(data);
    if (res) {
      router.replace(AppRoutes.home);
    } else {
      handleError("Error al iniciar sesión");
    }
  };



  //Susses

  const handleSuccessSendEmail = (data) => {

    if (data) {

      toast.success("Mensaje enviado", { id: toastId });

    } else {
      handleError("Error al enviar correo de recuperación");
    }
  };

  const handleSuccessSendNewPass = (data) => {

    if (data) {

      toast.success("Recuperación exitosa", { id: toastId });

    } else {
      handleError("Error al cambiar contraseña");
    }
  };

  const handleSuccessSendQuestion = (data) => {

    if (data) {

      toast.success("Encuesta actualizada", { id: toastId });

    } else {
      handleError("Error al actualizar encuesta");
    }
  };



  return {
    doLogin, hasError: isError || error, isLoading,
    doSendEmail, hasError: isErrorSendEmail || errorSendEmail, isLoadingSendEmail,
    doSendNewPass, hasError: isErrorNewPass || errorSendNewPass, isLoadingNewPass,
    doQuestion, hasError: isErrorQuestion || errorSendQuestion, isLoadingQuestion,
    authWithToken,
    isLoadingAuthWithToken,
  };
};

export default useAuth;
