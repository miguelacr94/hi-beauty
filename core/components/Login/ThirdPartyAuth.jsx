import { FacebookIcon, GoogleIcon } from "../shared/Icons/ThirdPartyAuth";

const ThirdPartyAuth = () => {
  const handleGoogleLogin = () => {
    console.log("do Google login");
  };

  const handleFacebookLogin = () => {
    console.log("do Facebook login");
  };
  return (
    <div className="flex flex-col w-full">
      <AuthNetwork
        title="Continuar con Google"
        icon={<GoogleIcon />}
        onClick={handleGoogleLogin}
      />
      <AuthNetwork
        title="Continuar con Facebook"
        icon={<FacebookIcon />}
        onClick={handleFacebookLogin}
      />
    </div>
  );
};

export default ThirdPartyAuth;

const AuthNetwork = ({ title, icon, onClick }) => {
  return (
    <button
      aria-label={title}
      role="button"
      onClick={onClick}
      className="focus:outline-none  focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4"
    >
      {icon}
      <p className="ml-4 text-base font-medium text-gray-700">{title}</p>
    </button>
  );
};
