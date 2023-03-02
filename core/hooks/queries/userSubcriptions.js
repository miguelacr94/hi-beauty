
import { useMutation } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { useId } from "react";
import toast from "react-hot-toast";
import SubscriptionsRepository from "../../repositories/subscripsions";
import { IS_DEV } from "../../utils/constants";


const useSubscriptions = (details = false) => {
    const toastId = useId();

    const { data, error, isError, isLoading } = useQuery(["subscriptions"],
        SubscriptionsRepository.getMySubscription,
        {
            enabled: !details,
            onError: (err) => handleError(err),
        }
    );



    const handleError = (err) => {
        if (IS_DEV) {
            console.error(err.message);
        }
        toast.error(err.message, { id: toastId });
    };


    // const { data: productLiked, error: errorLiked, isError: isErrorLiked, isLoading: isLoadingLiked } = useQuery(["productsLiked"],
    //     ProductsRepository.getProductsFavorites,
    //     {
    //         enabled: !!liked,
    //         onError: (err) => handleError(err),
    //     }
    // );
    const { errorStatus, isErrorStatus, isLoading: isLoadingStatus, mutateAsync: sendAsyncStateSubscription } = useMutation(
        (data) => SubscriptionsRepository.sendEmail(data),
        {
            onSuccess: (res) => handleSuccessStatus(res),
            onError: (err) => handleErrorStatus(err),
        }
    );

    //FUNCTIONS 
    const doChangeStatus = async (data) => {
        try {
            const res = await sendAsyncStateSubscription(data);
            if (res) {
                return res
            }
        } catch (err) {
            console.log(err)
        }
    }
    //  SUCCESS 

    const handleSuccessStatus = (data) => {
        const res = login(data);
        if (res) {
            //message
        } else {
            handleErrorStatus("Error al pausar suscripción");
        }
    };




    // ERRORS
    const handleErrorStatus = (err) => {
        if (IS_DEV) {
            console.error(err.message);
        }
        toast.error(err.message, { id: toastId });
    };



    //-------------------------get DataCard----------------------------------------------------//

    const { data: dataCard, error: errorCard, isError: isErrorCard, isLoading: isLoadingCard } = useQuery(["creditCard"],
        SubscriptionsRepository.getCreditCard,
        {
            onError: (err) => handleErrorCreditCard(err),
        }
    );

    const handleErrorCreditCard = (err) => {
        if (IS_DEV) {
            console.error(err.message);
        }
        toast.error(err.message, { id: toastId });
    };



    //--------------------------------------- paused subscriptions--------------------------------------//

    const { errorStatus: errorPaused, isErrorStatus: isErrorPaused, isLoading: isLoadingPaused, mutateAsync: sendAsyncPausedSubcriptions } = useMutation(
        (data) => SubscriptionsRepository.pausedSubcriptions(data),
        {
            onSuccess: (res) => handleSuccessPaused(res),
            onError: (err) => handleErrorPaused(err),
        }
    );

    //FUNCTIONS 
    const doPausedSubcriptions = async (data) => {

        try {
            const res = await sendAsyncPausedSubcriptions(data);
            if (res) {
                return res
            }
        } catch (err) {
            console.log(err)
        }
    }

    const handleSuccessPaused = (res) => {
        if (res) {
            //message
            console.log(res?.data?.subscription);

            toast.success(`Su solicitud para pausar suscripción fue enviada, pronto nos comunicaremos con usted `, { id: toastId });
        } else {
            handleErrorStatus("Error al pausar suscripción");
        }
    };


    //------------------------ change credit card-----------------------------------------------//



    const { error: errorCreditCard, isError: isErrorCreditCard, isLoading: isLoadingCreditCard, mutateAsync: sendAsyncCreditCard } = useMutation(
        () => SubscriptionsRepository.changeCreditCard(),
        {
            onSuccess: (res) => handleSuccessCreditCard(res),
            onError: (err) => handleErrorChangeCreditCard(err),
        }
    );

    //FUNCTIONS 
    const doChangeCreditCard = async () => {
        try {
            const res = await sendAsyncCreditCard();
            console.log(res);
            if (res) {
                return res
            }
        } catch (err) {
            console.log(err)
        }
    }


    //  SUCCESS 

    const handleSuccessCreditCard = (data) => {
        if (data) {
            //message
            return data;
        } else {
            handleErrorStatus("Error al actualizar tarjeta de crédito");
        }
    };
    // ERRORS
    const handleErrorChangeCreditCard = (err) => {
        if (IS_DEV) {
            console.error(err.message);
        }
        toast.error(err.message, { id: toastId });
    };


    //-------------------------------------------- get purchase subscriptions ------------------------------//


    const { data: dataPurchase, error: errorPurchase, isError: isPurchase, isLoading: isLoadingPurchase } = useQuery(["purchaseSubscriptions"],
        SubscriptionsRepository.getPurchaseSubscriptions,
        {
            onError: (err) => handleErrorPurchase(err),
        }
    );

    const handleErrorPurchase = (err) => {
        if (IS_DEV) {
            console.error(err.message);
        }
        toast.error(err.message, { id: toastId });
    };


    // ERRORS
    const handleErrorPaused = (err) => {
        if (IS_DEV) {
            console.error(err.message);
        }
        toast.error(err.message, { id: toastId });
    };




    //---------------------Get data dispatch autorice----------------------//

    const { data: dataDateDispatch, error: errorDateDispatch, isError: isErrorDateDispatch, isLoading: isLoadingDateDispatch } = useQuery(["dateDispatch"],
        SubscriptionsRepository.getDataDispatch,
        {
            onError: (err) => handleErrorDateDispatch(err),
        }
    );


    const handleErrorDateDispatch = (err) => {
        if (IS_DEV) {
            // console.error(err.message);
        }
        toast.error(err.message, { id: toastId });
    };



    return {
        subscriptions: data?.data ?? [],
        hasError: isError || error,
        isLoading,
        //---------------------------------
        doChangeStatus,
        hasError: isErrorStatus || errorStatus,
        isLoading: isLoadingStatus,
        //---------------------------------
        doPausedSubcriptions,
        hasError: isErrorPaused || errorPaused,
        isLoadingPaused,
        //---------------------------------------
        creditCard: dataCard ?? [],
        hasError: isErrorCard || errorCard,
        isLoadingCard,
        //--------------------------------------

        doChangeCreditCard,
        hasError: isErrorCreditCard || isErrorCreditCard,
        isLoadingCreditCard,
        //------------------------------------

        purchaseSubscriptions: dataPurchase ?? [],
        hasError: isPurchase || errorPurchase,
        isLoadingPurchase,

        //--------------------------------------

        dateDispatch: dataDateDispatch?.data ,
        hasError: isErrorDateDispatch || errorDateDispatch,
        isLoadingDateDispatch


    };
};


export default useSubscriptions;