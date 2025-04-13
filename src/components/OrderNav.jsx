import React from 'react'
import Container from './Container'

const OrderNav = () => {
    return (
        <header className='absolute top-0 left-0 w-full bg-red-600 py-8'>
            <Container>
                <nav>
                    <h1 className='text-white text-6xl font-londrina text-center'>Teknolojik Yemekler</h1>
                </nav>
            </Container>
        </header>
    )
}

export default OrderNav
