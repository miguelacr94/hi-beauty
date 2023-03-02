import Call from "../utils/call";

class PurchaseRepository {
    static getPurchaseMe = async ({ page }) => {
        try {
            //   if () {
            //     throw new Error("No data provided");
            //   }
            const { data } = await Call("GET", "/purchase/1");

            if (data && data.success) {
                return data;
            }

            throw new Error(data.info);
        } catch (err) {
            let errorInfo = err.info;
            if (!errorInfo) {
                errorInfo = "Ocurrió un error al traer productos";
            }

            throw new Error(errorInfo);
        }
    };

    static getPurchaseMeDetails = async (id) => {

        try {
            if (!id) {
            throw new Error("No id provided");
            }
            console.log(id)
            const { data } = await Call("GET", `/purchase/one/${id}`);

            if (data && data.success) {
                return data;
            }

            throw new Error(data.info);
        } catch (err) {
            let errorInfo = err.info;
            if (!errorInfo) {
                errorInfo = "Ocurrió un error al traer detalle del producto";
            }

            throw new Error(errorInfo);
        }
    };

}

export default PurchaseRepository;
