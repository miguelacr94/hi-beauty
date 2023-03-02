import Call from "../utils/call";

class ContactRepository {
  static sendContact = async (contactData) => {
    try {
      if (!contactData) {
        throw new Error("No data provided");
      }

      const { data } = await Call("POST", "/user/send-contact", contactData);

      console.log(data);

      if (data && data.success) {
        return data;
      }

      throw new Error(data.info);
    } catch (err) {
      let errorInfo = err.info;
      if (!errorInfo) {
        errorInfo = "Ocurrió un error al enviar el mensaje";
      }

      throw new Error(errorInfo);
    }
  };
}

export default ContactRepository;
