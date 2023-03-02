import { useForm } from "react-hook-form";
import useContact from "../../hooks/queries/useContact";
import useUser from "../../hooks/useUser";
import Button from "../shared/Button";
import Input from "../shared/Input";
import TextArea from "../shared/TextArea";

const Form = () => {
  const { user } = useUser();
  const { doSendContact, isLoading } = useContact();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: user?.fullName,
      email: user?.email,
      phone: user?.phone,
      message: null,
    },
  });

  const onSubmit = async (data) => await doSendContact(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full space-y-4"
    >
      <fieldset className="flex flex-col w-full space-y-4" disabled={isLoading}>
        <Input
          label="Nombre"
          className="w-full text-sm font-light"
          placeholder="Nombre"
          error={errors.name}
          {...register("name", { required: "Este campo es requerido" })}
        />
        <Input
          label="Correo electrónico"
          className="w-full text-sm font-light"
          placeholder="Correo electrónico"
          type="email"
          error={errors.email}
          {...register("email", { required: "Este campo es requerido" })}
        />
        <Input
          label="WhatsApp"
          className="w-full text-sm font-light"
          placeholder="WhatsApp"
          error={errors.phone}
          {...register("phone", { required: "Este campo es requerido" })}
        />
        <TextArea
          label="Mensaje"
          className="w-full text-sm font-light"
          placeholder="¿Que deseas decirnos?"
          error={errors.message}
          rows={3}
          {...register("message", { required: "Este campo es requerido" })}
        />
      </fieldset>
      <div className="flex justify-end w-full">
        <Button type="submit" isLoading={isLoading} text="Enviar" />
      </div>
    </form>
  );
};

export default Form;
