
import Call from "../utils/call";


class SubscriptionsRepository {
    static getMySubscription = async (page = 1) => {

        try {
            if (!page) {
                throw new Error("No data provided");
            }

            const { data } = await Call("GET", `/subscription/dispatches/${page}`);

            if (data) {
             
                return data;

            }

            throw new Error(data.info);
        } catch (err) {
            let errorInfo = err.info;
            if (!errorInfo) {
                // console.log('errroreeee')
                errorInfo = "Ocurrió un error al traer subscription";
            }

            throw new Error(errorInfo);
        }
    };

    static updateQuestion = async (newData) => {
        try {
            if (!newData) {
                throw new Error("No data provided");
            }
            const { data } = await Call("PUT", "/user/update", newData);

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


    static pausedSubcriptions = async (newData) => {

        try {
            if (!newData) {
                throw new Error("No data provided");
            }
            const { data } = await Call("PUT", `/subscription/pause/${newData?.id}`, newData);

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

    static getPlans = async () => {
        try {
            const { data } = await Call("GET", "/subscription/plans");

            if (data && data.success) {
                return data.data ?? [];
            }

            throw new Error(data.info);
        } catch (err) {
            let errorInfo = err.data?.info || err.message;
            if (!errorInfo) {
                errorInfo = "Ocurrió un error al obtener los planes";
            }

            throw new Error(errorInfo);
        }
    };

    static getCreditCard = async () => {
        try {
            const { data } = await Call("GET", "/subscription/card-info");

            if (data) {
                return data.data ?? [];
            }

            throw new Error(data.info);
        } catch (err) {
            let errorInfo = err.data?.info || err.message;
            if (!errorInfo) {
                errorInfo = "Ocurrió un error al obtener datos de la tarjeta de crédito";
            }

            throw new Error(errorInfo);
        }
    };


    static changeCreditCard = async () => {

        try {
            // if (!newData) {
            //     throw new Error("No data provided");
            // }
            const { data } = await Call("PUT", `/subscription/change-card`,);
            if (data) {
                return data;
            }

            throw new Error(data.info);
        } catch (err) {
            let errorInfo = err.info;
            if (!errorInfo) {
                errorInfo = "Ocurrió un error al realizar petición de cambio de tarjeta de crédito ";
            }

            throw new Error(errorInfo);
        }
    };

    static getPurchaseSubscriptions = async (page) => {

        try {
            if (!page) {
                throw new Error("No data provided");
            }

            const { data } = await Call("GET", `/subscription/payments/`);

            if (data) {
                return data;
            }

            throw new Error(data.info);
        } catch (err) {
            let errorInfo = err.info;
            if (!errorInfo) {
                errorInfo = "Ocurrió un error al traer pagos";
            }

            throw new Error(errorInfo);
        }
    };



    static getDataDispatch = async () => {
        try {
            const { data } = await Call("GET", "/shipment/user/validate");
            if (data) {
                return data;
            }

            throw new Error(data.info);
        } catch (err) {
            let errorInfo = err.data?.info || err.message;
            if (!errorInfo) {
                errorInfo = "Ocurrio un error al traer fecha de validación";
            }

            throw new Error(errorInfo);
        }
    };



}

export default SubscriptionsRepository;