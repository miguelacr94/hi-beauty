import { format } from "date-fns";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useLocation from "../../hooks/queries/useLocation";
import useProfile from "../../hooks/queries/useProfile";
import useUser from "../../hooks/useUser";
import Helpers from "../../utils/helpers";
import Button from "../shared/Button";
import Input from "../shared/Input";
import Select from "../shared/Select";
import Spinner from "../shared/Spinner";
import TableBase from "../shared/Tables/TableBase";
import TableColumn from "../shared/Tables/TableColumn";
import TableRow from "../shared/Tables/TableRow";
import TableRowProfile from "../shared/Tables/TableRowProfile";

const UserShippingInfoForm = () => {
  const { user, dateAddress } = useUser();
  const { departments, isLoading } = useLocation();
  const { doUpdate, isLoading: isUpdating } = useProfile();
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const [disabled, setDisabled] = useState();

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      department: user?.sendAddress?.department,
      city: user?.sendAddress?.city,
      address: user?.sendAddress?.address,
      neighborhood: user?.sendAddress?.neighborhood,
    },
  });

  const onSubmit = async (data) => await doUpdate(data);

  const handleSelectedDepartment = (v) => {
    const dep = departments.find((d) => d.id == v);
    if (dep) {
      setSelectedDepartment(dep);
      setValue("department", dep.name);
    }
  };

  const handleSelectedCity = (v) => {
    const cty = selectedDepartment.cities.find((c) => c.id == v);
    if (cty) {
      setSelectedCity(cty);
      setValue("city", cty.name);
    }
  };

  useEffect(() => {
    if (departments) {
      const dep = departments.find(
        (d) => d.name == user?.sendAddress?.department
      );
      if (dep) {
        setSelectedDepartment(dep);
        setSelectedCity();
        setValue("department", user?.sendAddress.department);
        setValue("city", user?.sendAddress.city);
      }
    }
  }, [departments, setValue, user?.sendAddress]);


  useEffect(() => {
    const days = Helpers.dateCalcule(format(new Date(dateAddress), "yyyy-MM-dd"), (format(new Date(), "yyyy-MM-dd")));
    if (!days) return false;
    if (days > 10) {

      setDisabled(false);
    }
    else {
      setDisabled(true)
    }
  }, []);

  console.log(disabled);
  if (!dateAddress) return null



  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full">
        <Spinner />
      </div>
    );
  }




  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>

      <fieldset className="w-full">

        {/* ------------------------------------------------------------ */}
        <div className="px-4">
          <TableRowProfile data-key={0}>
            <TableColumn className="text-start text-gray-700">Departamento</TableColumn>
            <TableColumn className="flex justify-end text-muted">
              <Select
                initialValue={getValues("department")}
                items={departments}
                onChange={handleSelectedDepartment}
                className=" w-full text-start"
                readOnly={disabled}
                disabled={disabled}
              />
            </TableColumn>
          </TableRowProfile>

          {/* ------------------------------------------------------------ */}
          <TableRowProfile data-key={1}>
            <TableColumn className="text-start text-gray-700">Ciudad</TableColumn>
            <TableColumn className="flex justify-end text-muted">
              <Select
                initialValue={getValues("city")}
                error={errors.city}
                items={selectedDepartment?.cities}
                onChange={handleSelectedCity}
                className=" w-full text-start"
                readOnly={disabled}
                disabled={disabled}
                clas
              />
            </TableColumn>
          </TableRowProfile>

          {/* ------------------------------------------------------------ */}
          <TableRowProfile data-key={2}>
            <TableColumn className="text-start text-gray-700">Dirección</TableColumn>
            <TableColumn className="flex justify-end text-muted">
              <Input
                initialValue={user?.sendAddress?.address}
                error={errors.address}
                {...register("address", {
                  required: "Este campo es requerido",
                })}
                className="text-end w-full"
                readOnly={disabled}

              />
            </TableColumn>
          </TableRowProfile>

          {/* ------------------------------------------------------------ */}
          <TableRowProfile data-key={3}>
            <TableColumn className="text-start text-gray-700">Barrio</TableColumn>
            <TableColumn className="flex justify-end text-muted">
              <Input
                initialValue={user?.sendAddress?.neighborhood}
                error={errors.neighborhood}
                {...register("neighborhood", {
                  required: "Este campo es requerido",
                })}
                className="text-end w-full"
                readOnly={disabled}
              />
            </TableColumn>
          </TableRowProfile>
        </div>
        <div className="flex justify-end w-full px-5 pb-4">
          <Button h="h-9" isLoading={isUpdating} type="submit" text="Actualizar" disabled={disabled} />
        </div>
      </fieldset>
    </form>
  );
};

export default UserShippingInfoForm;
