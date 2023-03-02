import useMobileMenu from "../../../hooks/useMobileMenu";
import Img from "../Img";

const Hamburger = ({ size = "2rem", className = "" }) => {
  const { isOpen, close, open } = useMobileMenu();

  const handleClick = () => {
    if (isOpen) {
      close();
      return;
    }

    open();
  };

  return (
    <button className="outline-none w-[30px] h-[30px] md:hidden" onClick={handleClick}>
      <Img
        src={'/assets/icons/menu.png'}
        containerClassName="flex justify-center "
        className="w-full"
        loading="eager"
        decoding="sync"
      />
    </button>
  );
};

export default Hamburger;
