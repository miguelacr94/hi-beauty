import { useRouter } from "next/router";
import { useEffect } from "react";
import LoginForm from "../core/components/Login/Form";
import ResetForm from "../core/components/Login/FormReset";
import Img from "../core/components/shared/Img";
import useAuth from "../core/hooks/queries/useAuth";
import useUser from "../core/hooks/useUser";
import { APP_LOGO_WHITE } from "../core/utils/constants";
import { AppRoutes } from "../core/utils/routes";

const Login = () => {
  const router = useRouter();
  const { authWithToken, isLoadingAuthWithToken } = useAuth()
  const { login } = useUser();

  const authUserWithToken = async (token) => {
    try {
      const res = await authWithToken(token);

      if (res && res.success) {
        const ok = login({ ...res, token })
        if (ok) {
          router.push(AppRoutes.home)
        }
      }
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    const token = router?.query?.token;
    if (token) {
      authUserWithToken(token)
    }
  }, [router?.query?.token])


  return (
    <div>


      <div className="flex flex-col items-center justify-center w-screen h-screen p-5 space-y-5 bg-gradient-to-b from-primary to-purple">
        <div className="flex flex-col items-center justify-center w-full">
          <Img src={APP_LOGO_WHITE} containerClassName="w-52" />
        </div>
        {!isLoadingAuthWithToken ?
          <div className="w-auto">
            {router.query?.reset ?

              <ResetForm /> :
              <LoginForm />
            }
          </div>

          :
          <div>
            <span className="text-white text-[20px]">
              verificando ...
            </span>


          </div>

        }


      </div>

    </div>

  );
};

export default Login;
