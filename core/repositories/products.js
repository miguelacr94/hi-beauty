import Call from "../utils/call";

class ProductsRepository {
    static getMorePurchase = async () => {
        try {
            //   if () {
            //     throw new Error("No data provided");
            //   }

            const { data } = await Call("GET", "/product/more");

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

    static getProductsFavorites = async () => {
        try {
            //   if () {
            //     throw new Error("No data provided");
            //   }

            const { data } = await Call("GET", "/product/favorite");

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


    static changeStateProductFavorite = async (payload) => {

       
        try {
            if (!payload) {
              throw new Error("No data provided");
            }
      

            console.log(payload);
            const  {data}  = await Call("PUT", `/product/favorite/${payload?.id}` , payload);
            console.log(data);
            if (data && data.success) {
              return data;
            }
      
            throw new Error(data.info);
          } catch (err) {
            let errorInfo = err.info;

            if (!errorInfo) {
              errorInfo = "Ocurrió un error al remover el producto de favoritos";
            }
      
            throw new Error(errorInfo);
          }
        };
    };





export default ProductsRepository;
