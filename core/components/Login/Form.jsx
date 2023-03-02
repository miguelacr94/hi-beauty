import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/queries/useAuth";
import Spinner from "../shared/Spinner";
import LoginInput from "./Input";

const LoginForm = () => {
  const { doLogin, doSendEmail, isLoading } = useAuth();

  const [resetPass, setResetPass] = useState(false);

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

  const onSubmit = async (data) => await doLogin(data);

  const onReset = async (data) => {

    const res = await doSendEmail(data);
    if (res) {
      console.log(res);
      reset();

    }
  }



  return (
    <div className="w-full max-w-md p-10 space-y-5 bg-white rounded-md shadow-sm ">
      <div className="flex flex-col w-full">
        <p
          tabIndex="0"
          className="text-2xl font-semibold leading-6 text-gray-800 focus:outline-none"
        >
          {!resetPass ? ' Inicia sesión en tu cuenta' : 'Recuperar contraseña'}
        </p>
        {!resetPass &&
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
        }
      </div>
      {/* <ThirdPartyAuth />
      <div className="flex items-center justify-between w-full">
        <hr className="bg-gray-400 grow" />
        <p className="text-base font-medium leading-4 px-2.5 text-gray-400">
          OR
        </p>
        <hr className="bg-gray-400 grow " />
      </div> */}
      <form onSubmit={!resetPass ? handleSubmit(onSubmit) : handleSubmit(onReset)}>
        <fieldset className="flex flex-col w-full" disabled={isLoading}>
          <div className="flex flex-col items-center justify-center space-y-5">
            <LoginInput
              className="w-full"
              label="Correo electrónico"
              type="email"
              error={errors.email}
              {...register("email", { required: "Este campo es requerido" })}
              
            />
            {!resetPass &&
              <LoginInput
                className="w-full"
                label="Contraseña"
                type="password"
                error={errors.password}
                {...register("password", { required: "Este campo es requerido" })}
              />
            }
          </div>
          <div className="mt-8">
            <button
              type="submit"
              role="button"
              disabled={isLoading}
              className="flex items-center justify-center w-full h-10 py-2 text-sm font-semibold leading-none text-white duration-300 border rounded max-h-10 bg-primary focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:outline-none hover:bg-primary-dark"
            >
              {isLoading ? <Spinner /> : <span>{!resetPass ? 'Iniciar sesión' : 'Recuperar contraseña'}</span>}
            </button>
          </div>
        </fieldset>
      </form>
      <div className=" flex justify-center">
        <a onClick={() => setResetPass(!resetPass)} className="w-full  text-start underline text-muted cursor-pointer">{!resetPass ? ' ¿Olvidaste tu contraseña?' : 'Iniciar sesión'}</a>

      </div>
    </div>
  );
};

export default LoginForm;
