import { useRouter } from "next/router";
import { useEffect } from "react";

const useRouteChange = (callback) => {
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeComplete", () => callback?.());

    return () => {
      router.events.off("routeChangeComplete", () => callback?.());
    };
  }, [router.events, callback]);
};

export default useRouteChange;
