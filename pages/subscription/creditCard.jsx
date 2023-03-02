import React from 'react'
import Button from '../../core/components/shared/Button'
import Gift from '../../core/components/shared/Icons/Gift'
import Paymethod from '../../core/components/Subscription/Paymethod'
import MainLayout from '../../core/layouts/MainLayout'
import { AppRoutes } from '../../core/utils/routes'

const creditCard = () => {
    return (
        <MainLayout>
            <Button
                text='Volver'
                isNavigation
                route={AppRoutes.subscription}

            />
            <div className='grid grid-cols-1 md:grid-cols-2 w-full mt-4'>

                <Paymethod />
            </div>


        </MainLayout>


    )
}

export default creditCard
