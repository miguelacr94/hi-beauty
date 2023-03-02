import Message from "../shared/Icons/Message";
import Form from "./Form";

const ContactForm = () => {
  return (
    <div className="flex flex-col items-start justify-start w-full h-full p-4 space-y-6 bg-white rounded-md shadow-sm">
      <div className="flex items-center justify-start space-x-2 text-gray-800">
        {/* <Message /> */}
        <h2 className="font-semibold">Envíanos un mensaje</h2>
      </div>
      <Form />
    </div>
  );
};

export default ContactForm;
