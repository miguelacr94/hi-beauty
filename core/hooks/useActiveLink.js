import { useRouter } from "next/router";

const useActiveLink = (link) => {
  const { asPath } = useRouter();

  const getIsActive = () => {
    const isRootRoute = asPath === "/" && link === "/";
    if (isRootRoute) {
      return true;
    }

    const route = asPath.substring(1).split("/").join("");
    const parsedLink = link.substring(1).split("/").join("");

    return parsedLink.trim().length > 0 && route.startsWith(parsedLink);
  };

  return { active: getIsActive() };
};

export default useActiveLink;
