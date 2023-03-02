import { useRouter } from "next/router";
import { useEffect, useId, useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/queries/useAuth";
import { AppRoutes } from "../../utils/routes";
import Spinner from "../shared/Spinner";
import LoginInput from "./Input";
import toast from "react-hot-toast";


const ResetForm = () => {

    const { doSendNewPass, isLoading } = useAuth();
    const router = useRouter();
    const toastId = useId();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: null,
            password: null,
        },
    });


    const onNewPass = async (data) => {
        const payload = {
            reset: router?.query?.reset,
            password: data?.password
        }

        if (data?.password !== data?.restPassword) {
            return toast.error("Las contraseñas no coinciden", { id: toastId });

        }
        const res = await doSendNewPass(payload);
        if (res) {

            router.replace(AppRoutes.login);
            return toast.success("Cambio de contraseña exitoso", { id: toastId });

        }
    }









    return (
        <div className="w-full max-w-md p-10 px- space-y-5 bg-white rounded-md shadow-sm">
            <div className="flex flex-col w-full">
                <p
                    tabIndex="0"
                    className="text-2xl font-semibold leading-6 text-gray-800 focus:outline-none"
                >
                    {'Recuperar contraseña'}
                </p>

                <p
                    tabIndex="0"
                    className="mt-4 text-sm font-medium leading-none text-gray-500 focus:outline-none"
                >
                    ¿No tienes una cuenta?{" "}
                    <a className="text-sm font-medium leading-none text-gray-800 cursor-pointer hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline">
                        {" "}
                        Regístrate aquí
                    </a>
                </p>

            </div>
            {/* <ThirdPartyAuth />
    <div className="flex items-center justify-between w-full">
      <hr className="bg-gray-400 grow" />
      <p className="text-base font-medium leading-4 px-2.5 text-gray-400">
        OR
      </p>
      <hr className="bg-gray-400 grow " />
    </div> */}
            <form onSubmit={handleSubmit(onNewPass)}>
                <fieldset className="flex flex-col w-full" disabled={isLoading}>
                    <div className="flex flex-col items-center justify-center space-y-5">


                        <LoginInput
                            className="w-full"
                            label="Nueva Contraseña"
                            type="password"
                            error={errors.password}
                            {...register("password", { required: "Este campo es requerido" })}
                        />

                        <LoginInput
                            className="w-full"
                            label="Validar contraseña"
                            type="password"
                            error={errors.password}
                            {...register("restPassword", { required: "Este campo es requerido" })}
                        />


                    </div>
                    <div className="mt-8">
                        <button
                            type="submit"
                            role="button"
                            disabled={isLoading}
                            className="flex items-center justify-center w-full h-10 py-2 text-sm font-semibold leading-none text-white duration-300 border rounded max-h-10 bg-primary focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:outline-none hover:bg-primary-dark"
                        >
                            {isLoading ? <Spinner /> : <span>{'Recuperar contraseña'}</span>}
                        </button>
                    </div>
                </fieldset>
            </form>
            <div className=" flex justify-center">
                <a onClick={() => router.replace(AppRoutes.login)} className="w-full  text-start underline text-muted cursor-pointer">{'Iniciar sesión'}</a>

            </div>
        </div>
    )
}

export default ResetForm
