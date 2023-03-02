class Cookies {
  static READ = (name) => {
    var cookieArr = document.cookie.split(";");
    for (var i = 0; i < cookieArr.length; i++) {
      var cookiePair = cookieArr[i].split("=");

      if (name == cookiePair[0].trim()) {
        return decodeURIComponent(cookiePair[1]);
      }
    }
    return null;
  };

  static SET = (name, value, expires) => {
    const expiryDate = new Date(expires).toUTCString();
    document.cookie = `${name}=${value}; Expires=${expiryDate}; Path=/;SameSite=Strict;`;
  };

  static DELETE = (name) => {
    document.cookie =
      name +
      "=; Path=/; SameSite=Strict; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  };
}

export default Cookies;
