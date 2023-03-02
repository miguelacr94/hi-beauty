
import { useMutation } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { useId } from "react";
import toast from "react-hot-toast";
import ProductsRepository from "../../repositories/products";
import { IS_DEV } from "../../utils/constants";


const useProducts = (liked = false,) => {
    const toastId = useId();

    const { data, error, isError, isLoading } = useQuery(["products"],
        ProductsRepository.getMorePurchase,
        {
            enabled: !liked,
            onError: (err) => handleError(err),
        }
    );

    const { data: productLiked, error: errorLiked, isError: isErrorLiked, isLoading: isLoadingLiked } = useQuery(["productsLiked"],
        ProductsRepository.getProductsFavorites,
        {
            enabled: !!liked,
            onError: (err) => handleError(err),
        }
    );

    const { errorRemoveFavorite, isErrorRemoveFavorite, isLoadingRemoveFavorite, mutateAsync: sendAsyncRemoveFavorite } = useMutation(
        (data) => ProductsRepository.changeStateProductFavorite(data),
        {
            onSuccess: (res) => handleSuccessRemove(res),
            //   onError: (err) => handleErrorSendNewPass(err),
        }
    );


    const doRemoveProduct = async (data) => {

        try {
            console.log(data);
            await sendAsyncRemoveFavorite(data);
        } catch (err) {
            console.error(err);
        }
    };



    const handleSuccessRemove = (data) => {

        if (data) {
            toast.success("Mensaje enviado", { id: toastId });
            return data;
        } else {
            handleError("Error al enviar correo de recuperación");
        }
    };


    const handleError = (err) => {
        if (IS_DEV) {
            console.error(err.message);
        }
        toast.error(err.message, { id: toastId });
    };

    return {
        products: data?.data ?? [],
        hasError: isError || error,
        isLoading,
        productsLiked: productLiked?.data ?? [],
        hasErrorLiked: errorLiked || isErrorLiked,
        isLoadingLiked,
        doRemoveProduct, hasError: isErrorRemoveFavorite || errorRemoveFavorite, isLoadingRemoveFavorite


    };
};


export default useProducts;