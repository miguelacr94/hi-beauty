import Basket from "../components/shared/Icons/Basket";
import Heart from "../components/shared/Icons/Heart";
import Home from "../components/shared/Icons/Home";
import Star from "../components/shared/Icons/Star";
import Support from "../components/shared/Icons/Support";
import Tutorial from "../components/shared/Icons/Tutorial";
import User from "../components/shared/Icons/User";

export class AppRoutes {
  static home = "/";
  static profile = "/profile";
  static subscription = "/subscription";
  static purchases = "/purchases";
  static wishList = "/wish-list";
  static support = "/support";
  static login = "/login";
  static survey = "/survey"
  static tutorial = "/tutorial"
}

export const primaryLinks = [
  {
    title: "Inicio",
    route: AppRoutes.home,
    icon: <Home />,
  },
  {
    title: "Perfil",
    route: AppRoutes.profile,
    icon: <User />,
  },
  {
    title: "Suscripción",
    route: AppRoutes.subscription,
    icon: <Star />,
  },
  {
    title: "Compras",
    route: AppRoutes.purchases,
    icon: <Basket />,
  },
  {
    title: "Lista de deseos",
    route: AppRoutes.wishList,
    icon: <Heart />,
  },
  // {
  //   title: "Tutorial",
  //   route: AppRoutes.tutorial,
  //   icon: <Tutorial />
  // },
  {
    title: "Soporte",
    route: AppRoutes.support,
    icon: <Support />,
  },
];
