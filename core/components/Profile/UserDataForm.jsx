import { format } from "date-fns";
import { useEffect, useId, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useProfile from "../../hooks/queries/useProfile";
import useSubscriptions from "../../hooks/queries/userSubcriptions";
import useCopyToClipboard from "../../hooks/useCopyToClipboard";
import useUser from "../../hooks/useUser";
import Helpers from "../../utils/helpers";
import Strings from "../../utils/strings";
import Button from "../shared/Button";
import Input from "../shared/Input";
import TableBase from "../shared/Tables/TableBase";
import TableColumn from "../shared/Tables/TableColumn";
import TableRow from "../shared/Tables/TableRow";
import TableRowProfile from "../shared/Tables/TableRowProfile";

const UserDataForm = () => {
  const { user } = useUser();
  const { copy } = useCopyToClipboard();
  const id = useId();

  const { doUpdate, isLoading } = useProfile();
  const { dateDispatch } = useSubscriptions();

  const [fecha, setFecha] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: user?.fullName,
      document: user?.document,
      email: user?.email,
      dateBirth: Helpers.dateToInputDate(user?.dateBirth),
    },
  });

  const handleCopyValue = (value) => {
    copy(value);
    toast.success(Strings.copiedToClipboard, { id: id });
  };

  const onSubmit = async (data) => await doUpdate(data);



  return (
    <form className="w-full md:overflow-x-hidden overflow-hidden" onSubmit={handleSubmit(onSubmit)}>

      {/* <p>{Helpers.dateCalcule(format(new Date(fecha), "dd MMMM yyyy"))}</p> */}
      <fieldset className="w-full" disabled={isLoading}>
        {/* ------------------------------------------------------------ */}
        <div className="px-4">
          <TableRowProfile data-key={0}>
            <TableColumn className="text-start text-gray-700">Código:</TableColumn>
            <TableColumn className="flex justify-end w-full text-muted">
              <button
              className="w-full  "
                type="button"
                onClick={() => handleCopyValue(user?.code)}
              >
                <Input initialValue={user?.code} readOnly className="text-start w-full border border-gray-700" />
              </button>
            </TableColumn>
          </TableRowProfile>

          {/* ------------------------------------------------------------ */}
          <TableRowProfile data-key={1}>
            <TableColumn className="text-start  text-gray-700">
              Nombres y apellidos:
            </TableColumn>
            <TableColumn className="flex justify-end text-muted w-full">
              <Input
                initialValue={user?.fullName}
                error={errors.fullName}
                {...register("fullName", {
                  required: "Este campo es requerido",
                })}
                className="text-start w-full border-700"
              />
            </TableColumn>
          </TableRowProfile>

          {/* ------------------------------------------------------------ */}
          <TableRowProfile data-key={2}>
            <TableColumn className="text-start  text-gray-700">Cédula:</TableColumn>
            <TableColumn className="flex justify-end text-muted">
              <Input
                initialValue={user?.document}
                type="number"
                error={errors.document}
                {...register("document", {
                  required: "Este campo es requerido",
                })}
                className="text-start w-full"
              />
            </TableColumn>
          </TableRowProfile>

          {/* ------------------------------------------------------------ */}
          <TableRowProfile data-key={3}>
            <TableColumn className="text-start  text-gray-700">Email:</TableColumn>
            <TableColumn className="flex justify-end text-muted">
              <Input
                initialValue={user?.email}
                error={errors.email}
                {...register("email", {
                  required: "Este campo es requerido",
                })}
                className="text-start w-full"

              />
            </TableColumn>
          </TableRowProfile>

          {/* ------------------------------------------------------------ */}
          <TableRowProfile data-key={4}>
            <TableColumn className="text-start  text-gray-700">Referido:</TableColumn>
            <TableColumn className="flex justify-end text-muted">
              <Input initialValue={user?.refer} readOnly className="text-start w-full" />
            </TableColumn>
          </TableRowProfile>

          {/* ------------------------------------------------------------ */}
          <TableRowProfile data-key={5}>
            <TableColumn className="text-start  text-gray-700">
              Fecha de nacimiento:
            </TableColumn>
            <TableColumn className="flex justify-end text-muted">
              <Input
                initialValue={Helpers.dateToInputDate(user?.dateBirth)}
                type="date"
                error={errors.dateBirth}
                {...register("dateBirth", {
                  required: "Este campo es requerido",
                })}
                className="text-start w-full"
              />
            </TableColumn>
          </TableRowProfile>

          {/* ------------------------------------------------------------ */}
        </div>
        <div className="flex justify-end w-full px-5 pb-4">
          <Button h="h-9" type="submit" isLoading={isLoading} text="Actualizar" />
        </div>
      </fieldset>
    </form >
  );
};

export default UserDataForm;
