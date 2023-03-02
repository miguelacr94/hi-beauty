import useUser from "../../../hooks/useUser";

const SuscriptionStatus = ({className}) => {
  const { user } = useUser();

  return (
    <div className={`${className} flex items-center space-x-1.5 text-base font-light whitespace-nowrap grow`}>
      <span>Tu suscripción está</span>
      <span
        className={`font-semibold`}
      >
        {user?.subscription?.state ? "activa" : "inactiva"}
      </span>
      <span
        className={`w-4 ${
          user?.subscription?.state ? "bg-green-500" : "bg-red-500"
        } rounded-full aspect-square`}
      />
    </div>
  );
};

export default SuscriptionStatus;
