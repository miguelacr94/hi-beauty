import { Popover } from "@headlessui/react";
import { format } from "date-fns";
import { Router, useRouter } from "next/router";
import { useState } from "react";
import useUser from "../../hooks/useUser";
import Helpers from "../../utils/helpers";
import { AppRoutes } from "../../utils/routes";
import Button from "../shared/Button";
import Plan from "../shared/Cards/Plan";
import Close from "../shared/Icons/Close";
import Gift from "../shared/Icons/Gift";
import Pencil from "../shared/Icons/Pencil";
import NotificationIcon from "../shared/NotificationIcon";
import NotificationsPopup from "../shared/Notifications/NotificationsPopup";
import PopOver from "../shared/PopOver";
import PopOverOpt from "../shared/PopOverOpt";
import TableBase from "../shared/Tables/TableBase";
import TableColumn from "../shared/Tables/TableColumn";
import TableRow from "../shared/Tables/TableRow";
import FormPaused from "./FormPaused";
import Paymethod from "./Paymethod";
import Plans from "./Plans";

const SubscriptionData = () => {
  const { user } = useUser();
  const [openModal, setOpenModal] = useState(false);
  const [screenModal, setScreenModal] = useState(null);

  const router = useRouter();

  const data1 = [
    {
      title: "Plan:",
      value: user?.subscription?.plan?.title,
      // content: <Button
      //   text='Editar'
      //   onClick={() => onScreenModal('changePlan')}

      // />
    },
    {
      title: "Valor del plan:",
      value: Helpers.formatCurrency(user?.subscription?.plan?.price),


    },
    {
      title: "Método de pago:",
      value: Helpers.payMethodParser(user?.subscription?.paymentMethod),
      content: user?.subscription?.paymentMethod === 'creditCard' && <Button
        text='Editar'
        onClick={() => router.push('subscription/creditCard')}

      />

    },
    {
      title: "Fecha de ingreso:",
      value: format(new Date(user?.subscription?.createdAt ? user?.subscription?.createdAt
        : null), "dd/MM/yyyy"),
      readOnly: true,
    },
    {
      title: "Estado subscription:",
      readOnly: true,
      content:
        user?.subscription &&

        <div>
          {user?.subscription?.status !== 'en curso' ?

            < Button
              text={Helpers.statusSubscriptions(user?.subscription?.status) || 'sin estado'}
              onClick={() => onScreenModal('statusSubscriptions')}
            />

            :
            <span>Solicitud de pausa en curso</span>

          }
        </div >


      ,

    },
  ];


  const onScreenModal = (e) => {
    setScreenModal(e);
    setOpenModal(true);
  }


  return (
    <div className="flex flex-col w-full row-span-2 space-y-4 overflow-y-scroll bg-white rounded-md shadow-sm max-h-80">
      <div className="flex items-center px-4 pt-4 space-x-2">
        <Gift size="1.2em" />
        <h2>Datos de suscripción</h2>





      </div>
      <div className="flex flex-col space-y-3 items start ">
        <TableBase className="shadow-none">
          <tbody className="font-light">
            {data1.map((item, i) => (
              <TableRow key={i} data-key={i}>
                <TableColumn className="text-start">{item?.title}</TableColumn>
                <TableColumn className="flex justify-end ">
                  <div className="flex items-center space-x-2">
                    <span>{item.value}</span> <div>{item.content}</div>
                  </div>

                </TableColumn>

                {/* <TableColumn className="text-start">Plan</TableColumn>
              <TableColumn className="flex justify-end">
                {user?.subscription?.plan?.planType}
              </TableColumn>

              <TableColumn className="text-start">Valor plan</TableColumn>
              <TableColumn className="flex justify-end">
                {user?.subscription?.plan?.price}
              </TableColumn>

              <TableColumn className="text-start">Método de pago</TableColumn>
              <TableColumn className="flex justify-end">
                {user?.subscription?.maskedNumber}
              </TableColumn>

              <TableColumn className="text-start">Fecha de ingreso</TableColumn>
              <TableColumn className="flex justify-end">
                {user?.subscription?.createdAt}
              </TableColumn> */}

              </TableRow>
            ))}

          </tbody>
        </TableBase>
      </div>
      <div className="flex items-center justify-end w-full p-4">
        {/* <Button
          isNavigation
          route={`${AppRoutes.subscription}/edit`}
          text="Editar"
        /> */}
      </div>


      <div id="myModal" className={`modal ${openModal ? 'block' : 'hidden'}   flex justify-center items-center  `}>


        <div className={`modal-content  mb-4 p-4 rounded-lg ml-0 ${screenModal == 'changePlan' ? 'md:min-w-[1200px] overflow-y-auto md:overflow-y-hidden' : ''} `}>
          <p onClick={() => setOpenModal(false)} className="flex items-end justify-end w-full text-lg cursor-pointer text-end"><Close size={'1rem'} /></p>

          {screenModal === 'changePlan' ?

            <Plans />

            :
            <FormPaused
              setRes={(e) => setOpenModal(e)}
            />

          }

        </div>

      </div>

    </div>
  );
};

export default SubscriptionData;
