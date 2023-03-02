import { useAtom } from "jotai";
import { mobileMenuAtom } from "../atoms/mobile-menu";

const useMobileMenu = () => {
  const [isOpen, setIsOpen] = useAtom(mobileMenuAtom);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return { isOpen, open, close };
};

export default useMobileMenu;
