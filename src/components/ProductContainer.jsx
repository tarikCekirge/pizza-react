import React from 'react'
import Container from './Container'

const ProductContainer = ({ children }) => {
    return (
        <>
            <Container>
                <div className='grid md:grid-cols-3 gap-4 my-6'>
                    {children}
                </div>
            </Container>
        </>
    )
}

export default ProductContainer
