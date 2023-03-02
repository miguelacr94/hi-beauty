import Call from "../utils/call";

class AuthRepository {
  static login = async (loginData) => {

    try {
      if (!loginData) {
        throw new Error("No data provided");
      }

      const { data } = await Call("POST", "/user/auth", loginData);

      if (data && data.success) {
        return data;
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



  static sendEmail = async (resetData) => {
    try {
      if (!resetData) {
        throw new Error("No data provided");
      }

      const { data } = await Call("GET", `/user/restore/password/${resetData?.email}`);
      if (data && data.success) {
        return data;
      }

      throw new Error(data.info);
    } catch (err) {
      let errorInfo = err.info;
      if (!errorInfo) {
        errorInfo = "Ocurrió un error al enviar correo de recuperación";
      }

      throw new Error(errorInfo);
    }
  };

  static sendNewPassword = async (resetPass) => {
    try {
      if (!resetPass) {
        throw new Error("No data provided");
      }

      const { data } = await Call("PUT", `/user/restore/password/`, resetPass);
      console.log(data);
      if (data && data.success) {
        return data;
      }

      throw new Error(data.info);
    } catch (err) {
      let errorInfo = err.info;
      if (!errorInfo) {
        errorInfo = "Ocurrió un error al recuperar contraseña";
      }

      throw new Error(errorInfo);
    }
  };



  static getDataMe = async (token) => {
    try {
      if (!token) {
        throw new Error("No token provided");
      }

      const { data } = await Call("GET", `/user/me/`, null, false, token);
      if (data && data.success) {
        return data;
      }

      throw new Error(data.info);
    } catch (err) {
      let errorInfo = err.info;
      if (!errorInfo) {
        errorInfo = "";
      }

      throw new Error(errorInfo);
    }
  };


}






export default AuthRepository;
