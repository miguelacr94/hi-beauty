import { useState } from "react";
import { useForm } from "react-hook-form";
import useSubscriptions from "../../hooks/queries/userSubcriptions";
import Helpers from "../../utils/helpers";
import { AppRoutes } from "../../utils/routes";
import Button from "../shared/Button";
import Check from "../shared/Icons/Check";
import Close from "../shared/Icons/Close";
import Error from "../shared/Icons/Error";
import Input, { InputWithMask } from "../shared/Input";

const PaymethodForm = ({ onChange, defaultValues, value }) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    // defaultValues: defaultValues,
  });

  const [openModal, setOpenModal] = useState(false);
  const [message, setMessage] = useState(false);
  const { doChangeCreditCard, isLoadingCard, isLoadingCreditCard } = useSubscriptions();

  const handleChange = () => {
    onChange?.(getValues());
  };

  const onChangeCreditCard_ = async () => {
    const res = await doChangeCreditCard();
    if (res) {
      setOpenModal(true);
      if (res.success === true) {
        setMessage(true);
      } else {
        setMessage(false);

      }
    }
  }


  return (
    <>
      <form className="w-full" onChange={handleChange} onSubmit={handleSubmit(onChangeCreditCard_)}>
        <fieldset className="flex flex-col w-full space-y-4">
          <Input
            label="Nombre"
            className="w-full text-sm font-light"
            placeholder="Nombre"
            error={errors.name}
            {...register("cardHolder", { required: "Este campo es requerido" })}
            value={defaultValues?.cardHolder}
            readOnly={true}
          />
          <InputWithMask
            label="Número de la tarjeta"
            className="w-full text-sm font-light"
            placeholder="Número de la tarjeta"
            // mask={`**** **** **** ${defaultValues?.last4}`}
            error={errors.number}
            // {...register("number", { required: "Este campo es requerido" })}
            value={`**** **** **** ${defaultValues?.last4}`}
            readOnly={true}
          />
          <InputWithMask
            label="Fecha de expiración"
            className="w-full text-sm font-light"
            placeholder="Fecha de expiración"
            mask="99/99"
            error={errors.expiryDate}
            // {...register("expiryDate", { required: "Este campo es requerido" })}
            readOnly={true}
            value={Helpers.changeExpiredFormat(defaultValues?.expiration?.month, defaultValues?.expiration?.year)}
          />
          {/* <Input
          label="CVV"
          className="w-full text-sm font-light"
          placeholder="CVV"
          error={errors.cvv}
          max={3}
          {...register("cvv", { required: "Este campo es requerido" })}
          readOnly={true}
          value={''}
        /> */}
        </fieldset>
        <p className="text-muted mt-4 text-sm">Recuerde dar click en actualizar para realizar solicitud de cambio de tarjeta de crédito.
          Los datos anteriormente reflejados en la tarjeta no se pueden modificar por este medio.
        </p>
        <Button
          text='Actualizar'
          type='submit'
          className='px-8 mt-8'
          isLoading={isLoadingCreditCard}
        />
      </form>

      <div id="myModal" className={`modal ${openModal ? 'block' : 'hidden'}   flex justify-center items-center   `}>


        <div className={`modal-content  mb-4 p-4 rounded-lg ml-0 md:max-w-[390px] md:w-auto  w-11/12 `}>
          <p onClick={() => setOpenModal(false)} className="flex items-end justify-end w-full text-lg cursor-pointer text-end">
            <Close size={'1rem'} />
          </p>
          {message ?
            <div className="text-center flex justify-center flex-col items-center text-muted">
              <Check
                size={'2rem'}
                className='text-green-600'
              />
              <p>Solicitud enviada con éxito.</p>
              <p>Por favor revise su correo electrónico para realizar el cambio de tarjeta de crédito.</p>
            </div>
            :
            <div className="text-center flex justify-center flex-col items-center space-y-4 text-muted">
              <Error
                size={'2rem'}
                className='text-red-600'
              />
              <p>Error al realizar solicitud.</p>
              <p>Por favor comuníquese con el area de soporte Hi Beauty.</p>
              <Button
                text='Ir a soporte'
                type='submit'
                isNavigation
                route={AppRoutes.support}
              />
            </div>
          }
          <p></p>

        </div>

      </div>
    </>

  );
};

export default PaymethodForm;
