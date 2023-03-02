import { useRouter } from "next/router";
import useUser from "../../../hooks/useUser";
import { AppRoutes } from "../../../utils/routes";
import Button from "../Button";
import Logout from "../Icons/Logout";
import User from "../Icons/User";

const UserPopupOptions = () => {
  const { logout } = useUser();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    setTimeout(() => {
      router.push(AppRoutes.login);
    }, 500);
  };

  return (
    <div className="flex flex-col items-end justify-start w-full p-4 space-y-2">

      
      <Button
        onClick={()=>router.push(AppRoutes.profile)}
        icon={<User />}
        text="Mi perfil"
        className="w-32"
      />
        
        <Button
        onClick={handleLogout}
        icon={<Logout />}
        text="Cerrar sesión"
        className="w-auto"
      />
    </div>
  );
};

export default UserPopupOptions;
