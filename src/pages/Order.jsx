import React from 'react'
import OrderDetail from '../components/OrderDetail'
import OrderNav from '../components/OrderNav'
import OrderForm from '../components/OrderForm'

const OrderPage = () => {
    return (
        <>
            <section className='pb-12'>
                <OrderNav />
                <OrderDetail />
            </section>
            <section className='bg-white py-12'>
                <OrderForm />
            </section>
        </>
    )
}

export default OrderPage
