import Facebook from "../shared/Icons/Facebook";
import Instagram from "../shared/Icons/Instagram";
import Tiktok from "../shared/Icons/Tiktok";
import ContactItem from "./ContactItem";

const JoinOurCommunity = () => {
  return (
    <div className="flex flex-col items-start justify-start w-full p-4 space-y-4 bg-white rounded-md shadow-sm">
      <h2 className="font-semibold text-gray-800">
        Únete a nuestra comunidad de belleza
      </h2>
      <div className="flex flex-col items-start justify-center space-y-2">
        <ContactItem
          href="https://www.instagram.com/hibeauty_co/"
          text="@hibeauty_co"
        >
          <Instagram
            size="1.4em"
            className="duration-300 group-hover:text-instagram"
          />
        </ContactItem>
       
          
      
      </div>
    </div>
  );
};

export default JoinOurCommunity;
