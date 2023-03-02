import { useAtom } from "jotai";
import { userAtom, dataAddressAtom } from "../atoms/user";
import Cookies from "../utils/cookies";
import Strings from "../utils/strings";
import useLocalStorage from "./useLocalStorage";

const useUser = () => {
  const [user, setUser] = useAtom(userAtom);
  // const [dateAddress, setDateAddress] = useAtom(dataAddressAtom)
  const { deleteKey } = useLocalStorage("user");

  const login = (data) => {
    try {
  
      setUser(data.user);
      Cookies.SET(Strings.tokenName, data.token);
      return true;
    } catch (err) {
      return false;
    }
  };

  const logout = () => {
    try {
      setUser(null);
      deleteKey();
      Cookies.DELETE(Strings.tokenName);
      return true;
    } catch (err) {
      return false;
    }
  };


  const update = (data) => {
    setUser(data);
  };

  const getFirstName = () => {
    if (!user) return;
    return user.fullName.split(" ").slice(0, 1).join(" ");
  };

  const setDate = (e) => {
    // setDateAddress(e);
  }


  return {
    user: { ...user, firstName: getFirstName() },
    login,
    logout,
    update,
    setUser,
    // dateAddress,
    setDate
  };
};

export default useUser;
