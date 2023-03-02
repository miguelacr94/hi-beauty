import Call from "../utils/call";

class LocationRepository {
  static getDepartments = async () => {
    try {
      const { data } = await Call("GET", "/location");

      if (data && data.success) {
        return data.data ?? [];
      }

      throw new Error(data.info);
    } catch (err) {
      let errorInfo = err.info;
      if (!errorInfo) {
        errorInfo = "Ocurrió un error al iniciar sesión";
      }

      throw new Error(errorInfo);
    }
  };
}

export default LocationRepository;
