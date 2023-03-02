import User from "../shared/Icons/User";
import UserDataForm from "./UserDataForm";

const UserData = () => {
  return (
    <div className="flex flex-col w-full row-span-2 space-y-4 overflow-y-scroll md:overflow-y-hidden bg-white rounded-md shadow-sm max-h-160">
      <div className="flex items-center px-4 pt-4 space-x-2">
        <User size="1.2em" />
        <h2>Datos básicos</h2>
      </div>
      <UserDataForm />
    </div>
  );
};

export default UserData;
