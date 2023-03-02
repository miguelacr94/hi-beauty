class Helpers {
  static formatCurrency = (v) => {
    let value = v;

    if (typeof v != "number") {
      value = 0;
    }

    const options = { style: "currency", currency: "COP" };
    const numberFormat = new Intl.NumberFormat("es-CO", options);
    return `${numberFormat.format(value)} COP`;
  };

  static removeSlashes = (value) => {
    return value.replace(/\//g, "");
  };

  static firstOfArray = (arr = []) => {
    if (arr.length == 0) return null;
    return arr[0];
  };

  static isObjectEmpty = (obj) => {
    return (
      obj && // 👈 null and undefined check
      Object.keys(obj).length === 0 &&
      Object.getPrototypeOf(obj) === Object.prototype
    );
  };

  static dateToInputDate = (date) => {
    const value = new Date(date || Date.now());
    return value.toISOString().split("T")[0];
  };

  static getGreetingTime = () => {
    const date = new Date();
    let greeting = null;

    const split_afternoon = 12; //24hr time to split the afternoon
    const split_evening = 17; //24hr time to split the evening
    const currentHour = date.getHours();

    if (currentHour >= split_afternoon && currentHour <= split_evening) {
      greeting = "buenas tardes ⛅️";
    } else if (currentHour >= split_evening) {
      greeting = "buenas noches 🌙";
    } else {
      greeting = "buenos días ☀️";
    }

    return greeting;
  };


  static copiarAlPortapapeles(id_elemento) {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
  }

  static payMethodParser = (name) => {
    switch (name) {
      case "creditCard":
        return "Tarjeta de crédito";
      case "nequi":
        return "Nequi";
      case "pse":
        return "PSE";
      case "bancolombia":
        return "Bancolombia";
      case "daviplata":
        return "Daviplata";
      case "bitcoin":
        return "Bitcoin";
        case "CARD":
          return "Tarjeta de crédito";
          case "NEQUI":
            return "Nequi";
    }
  };


  static statusSubscriptions = (status) => {
    switch (status) {
      case 'pausada':
        return 'Activar';
      case 'activa':
        return 'Pausar'
    }
  }

  static statusSubscriptionsSend = (status) => {
    switch (status) {
      case 'pausada':
        return 'activa';
      case 'activa':
        return 'pausada'
    }
  }

  static statusPayments = (status) => {
    switch (status) {
      case 'FAILED':
        return 'Fallido';
      case 'REFUNDED':
        return 'Reintegrado'
        case 'APPROVED':
          return 'Aprobado'
    }
  }



  static changeExpiredFormat = (month, year) => {
    if (month && year) {
      const newYear = year.substring(2)
      const newDate = `${month}${newYear}`
      return newDate
    }
  }
  static changeExpiredFormat_ = (month, year) => {
    if (month && year) {
      const newYear = year.substring(2)
      const newDate = `${month}/${newYear}`
      return newDate
    }
  }

  static changeCvv = (c) => {
    if (c) {
      const newYear = c.substring(2)
      const newDate = `**${newYear}`
      return newDate
    }
  }

  static dateCalcule = (i,f) => {
    var date_1 = new Date( `${i}`);

    var date_2 = new Date(`${f}`);
    
    var day_as_milliseconds = 86400000;
    var diff_in_millisenconds = date_2 - date_1;
    var diff_in_days = diff_in_millisenconds / day_as_milliseconds;
    
   return( diff_in_days );
  }


}

export default Helpers;
