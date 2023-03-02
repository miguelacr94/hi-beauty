import React from 'react'
import Button from '../shared/Button'
import TextArea from '../shared/TextArea'
import { useForm } from "react-hook-form";
import useSubscriptions from '../../hooks/queries/userSubcriptions';
import useUser from '../../hooks/useUser';
import Helpers from '../../utils/helpers';


const FormPaused = ({ setRes }) => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            reason: null,
        },
    });

    const { user, setUser } = useUser();

    const { doPausedSubcriptions, isLoadingPaused } = useSubscriptions();



    const onSubmit = async (data) => {

        const payload = {
            id: user?.subscription?._id,
            comment: data?.reason,
            status: 'en curso'
        }
        const res = await doPausedSubcriptions(payload);
        if (res) {
            console.log(res);
            setRes(false);
            reset();
            setUser(res?.data);
        }


    }



    return (
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4 min-w-[400px]' >
            {user?.subscription?.status === 'activa' ?
                <TextArea
                    className="w-full"
                    label={`Escriba motivo de la pausa`}
                    type="text"
                    placeholder='Escriba aquí'
                    error={errors.reason}
                    {...register("reason", { required: "Este campo es requerido" })}

                />
                :

                <p className='text-muted '>¿Desea activar la suscripción?</p>
            }
            <Button
                text={user?.subscription?.status === 'activa' ? 'enviar' : 'Activar'}
                type="submit"
                role="button"
                className='m-auto px-8 '
                isLoading={isLoadingPaused}
            />
        </form>
    )
}

export default FormPaused
