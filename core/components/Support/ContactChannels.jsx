import Email from "../shared/Icons/Email";
import WhatsApp from "../shared/Icons/Whatsapp";
import ContactItem from "./ContactItem";

const ContactChannels = () => {
  return (
    <div className="flex flex-col items-start justify-start w-full p-4 space-y-4 bg-white rounded-md shadow-sm">
      <h2 className="font-semibold text-gray-800">
        Contáctanos en los siguientes canales
      </h2>
      <div className="flex flex-col items-start justify-center space-y-2">
        <ContactItem href="mailto:hola@hibeauty.com.co" text="hola@hibeauty.com.co">
          <Email
            size="1.4em"
            className="duration-300 group-hover:text-primary"
          />
        </ContactItem>
        <ContactItem href="https://wa.me/573116682776" text="3116682776">
          <WhatsApp
            size="1.4em"
            className="duration-300 group-hover:text-whatsapp"
          />
        </ContactItem>
      </div>
    </div>
  );
};

export default ContactChannels;
