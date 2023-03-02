import { format } from 'date-fns';
import React, { useState } from 'react'
import useSubscriptions from '../../hooks/queries/userSubcriptions'
import Button from '../shared/Button';
import Truck from '../shared/Icons/Truck';
import TableBase from '../shared/Tables/TableBase';
import TableColumn from '../shared/Tables/TableColumn';
import TableRow from '../shared/Tables/TableRow';
import Helpers from "../../utils/helpers";
import Payment from '../shared/Icons/Payment';
import Img from '../shared/Img';
import useUser from '../../hooks/useUser';

const PaymentTable = () => {

    const { purchaseSubscriptions } = useSubscriptions();
    const { user } = useUser();
    const [table, setTable] = useState('crédito');
    
    return (
        <div className="flex flex-col w-full row-span-2 space-y-4 overflow-y-scroll bg-white rounded-md shadow-sm max-h-160">
            <div className="flex items-start md:items-center px-4 pt-4 md:space-x-2">
                <Payment size="1em" />
                <div className='flex flex-col md:flex-row items-center space-x-6 space-y-4 md:space-y-0'>
                    <h2>Listado de pagos</h2>
                    <div className='flex space-x-4 text-sm '>
                        <a className={`${table === 'débito' ? 'text-primary' : ''} underline cursor-pointer`} onClick={() => setTable('débito')}>Pagos débito</a>
                        <a className={`${table === 'crédito' ? 'text-primary' : ''} underline cursor-pointer`} onClick={() => setTable('crédito')}>Pagos crédito</a>
                    </div>
                </div>

            </div>
            {table === 'crédito' ?
                <div className="flex flex-col space-y-3 items start">
                    {user?.paymentsCredit?.length > 0 ?
                        <TableBase
                            headers={["N°", "Descripción", "Fecha de despacho", "Estado", "Método de pago", "Tarjeta", "Total"]}
                            className="shadow-none"
                        >

                            <tbody className="font-light">
                                {user?.paymentsCredit?.map((s, i) => (
                                    <TableRow key={i} data-key={i}>
                                        <TableColumn>{i + 1}</TableColumn>
                                        <TableColumn>{s?.description}</TableColumn>

                                        <TableColumn className="capitalize">
                                            {format(new Date(s?.createdAt), "dd MMMM yyyy")}
                                        </TableColumn>
                                        <TableColumn>{Helpers.statusPayments(s?.status)}</TableColumn>
                                        <TableColumn>{Helpers.payMethodParser(s?.paymentMethod?.type)}</TableColumn>
                                        <TableColumn>{s?.brand}</TableColumn>
                                        <TableColumn>{Helpers.formatCurrency(parseInt(s?.amount))}</TableColumn>
                                    </TableRow>
                                ))}
                            </tbody>
                        </TableBase>
                        :
                        <div className="w-full flex justify-center items-center flex-col md:min-h-[200px] min-h-[100px]">
                            {/* <Img
             containerClassName="flex justify-center  max-h-[16rem¡]"
             src="/assets/images/mano.png"
             className="object-contain w-full aspect-square max-h-[100px] max-w-[100px]"
         /> */}
                            <span className="text-muted text-md">No hay pagos con tarjeta de crédito agregados a tu lista</span>
                        </div>
                    }

                </div>
                :
                <div className="flex flex-col space-y-3 items start">
                    {user?.paymentsDebit?.length > 0 ?
                        <TableBase
                            headers={["N°", "Fecha de despacho", "Estado", "Método de pago", "Numero", "Total"]}
                            className="shadow-none"
                        >

                            <tbody className="font-light">
                                {user?.paymentsDebit?.map((s, i) => (
                                    <TableRow key={i} data-key={i}>
                                        <TableColumn>{i + 1}</TableColumn>
    
                                        <TableColumn className="capitalize">
                                            {format(new Date(s?.created_at), "dd MMMM yyyy")}
                                        </TableColumn>
                                        <TableColumn>{Helpers.statusPayments(s?.status)}</TableColumn>
                                        <TableColumn>{Helpers.payMethodParser(s?.payment_method_type)}</TableColumn>
                                        <TableColumn>{s?.payment_method?.phone_number}</TableColumn>
                                        <TableColumn>{Helpers.formatCurrency(parseInt(s?.amount_in_cents))}</TableColumn>
                                    </TableRow>
                                ))}
                            </tbody>
                        </TableBase>
                        :
                        <div className="w-full flex justify-center items-center flex-col md:min-h-[200px] min-h-[100px]">
                            {/* <Img
             containerClassName="flex justify-center  max-h-[16rem¡]"
             src="/assets/images/mano.png"
             className="object-contain w-full aspect-square max-h-[100px] max-w-[100px]"
         /> */}
                            <span className="text-muted text-md">No hay pagos con débito  agregados a tu lista</span>
                        </div>
                    }

                </div>

            }

        </div>
    )
}

export default PaymentTable