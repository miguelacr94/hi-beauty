
import { useQuery } from "@tanstack/react-query";
import { useId } from "react";
import toast from "react-hot-toast";
import PurchaseRepository from "../../repositories/purchase";
import { IS_DEV } from "../../utils/constants";


const usePurchases = (detail = false, ) => {

    const toastId = useId();

    const { data, error, isError, isLoading } = useQuery(["purchases"],
        PurchaseRepository.getPurchaseMe,
        {
            // enabled: !detail,
            onError: (err) => handleError(err),
        }
    );



    // const { data: dataDetails, error: errorDetails, isError: isErrorDetails, isLoading: isLoadingDetails } = useQuery(["purchaseDetails"],

    //     (idPurchase) =>
    //     PurchaseRepository.getPurchaseMeDetails(),
    //     {
    //         enabled: !!detail,
    //         onError: (err) => handleError(err),
    //     }
    // );



    const handleError = (err) => {
        if (IS_DEV) {
            console.error(err.message);
        }
        toast.error(err.message, { id: toastId });
    };

    return {
        purchases: data?.data ?? [],
        hasError: isError || error,
        isLoading,
        // purchaseDetails: dataDetails?.data ?? [],
        // hasErrorDetails: errorDetails || isErrorDetails,
        // isLoadingDetails

    };
};


export default usePurchases;