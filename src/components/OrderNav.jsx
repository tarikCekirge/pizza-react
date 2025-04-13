import React from 'react'
import Container from './Container'
import { NavLink } from 'react-router-dom'

const OrderNav = () => {
    return (
        <header className='absolute top-0 left-0 w-full bg-red-600 py-4 lg:py-8'>
            <Container>
                <nav>
                    <h1 className='text-white text-2xl lg:text-6xl font-londrina text-center'><NavLink to={'/'}>Teknolojik Yemekler</NavLink> </h1>
                </nav>
            </Container>
        </header>
    )
}

export default OrderNav
