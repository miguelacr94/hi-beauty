import { useMemo } from "react";
import Helpers from "../utils/helpers";

const useGreetingTime = () => {
  const greeting = useMemo(() => Helpers.getGreetingTime(), []);
  return greeting;
};

export default useGreetingTime;
