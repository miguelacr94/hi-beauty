import Call from "../utils/call";

class UserRepository {
  static updateData = async (newData) => {

    try {
      if (!newData) {
        throw new Error("No data provided");
      }

      const payload = {
        sendAddress: {
          address: newData?.address,
          city: newData?.city,
          department: newData?.department,
          neighborhood: newData?.neighborhood
        }
      }

      const { data } = await Call("PUT", "/user/update", payload);

      if (data && data.success) {

        return data;
      }

      throw new Error(data.info);
    } catch (err) {
      let errorInfo = err.info;
      if (!errorInfo) {
        errorInfo = "Ocurrió un error al actualizar datos de envío";
      }

      throw new Error(errorInfo);
    }
  };


 

}

export default UserRepository;
