import axios from "axios";
import { IS_DEV } from "./constants";
import Cookies from "./cookies";
import Strings from "./strings";

export const apiURL = IS_DEV
  ? "https://api.hibeauty.com.co"
  : "https://api.hibeauty.com.co";

function header(method, path, data, withFiles, token) {
  const options = {
    method,
  };

  options.url = `${apiURL}${path}`;

  if (data !== null) {
    options.data = data;
  }

  options.headers = {
    ssid: token ?? Cookies.READ(Strings.tokenName),
    "Content-Type": withFiles ? "multipart/form-data" : "application/json",
    "X-Developed-By": "Miguel Vega | (atleugim)",
    client: "web",
  };

  return options;
}

const Call = async (
  method = "GET",
  path,
  data = null,
  withFiles = false,
  token
) => {
  try {
    if (IS_DEV) {
      console.info(`Request to: ${apiURL}${path}`);
    }
    return await axios(header(method, path, data, withFiles, token));
  } catch (err) {
    if (IS_DEV) {
      console.error(`Request error: ${apiURL}${path}`);
      console.error(err.response);
    }
    throw ({ data } = err.response.data);
  }
};

export default Call;
