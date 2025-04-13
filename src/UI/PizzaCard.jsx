import React from 'react'
import { Link } from 'react-router-dom'

const PizzaCard = ({ url = "/order", name, price, rating, reviews, image }) => {
    return (
        <Link to={url} className='bg-white rounded-2xl p-8 space-y-2 hover:shadow-2xl transition-shadow'>
            <img src={`http://localhost:5173/src/assets/images/products/${image}`} alt={name} />
            <h2 className='text-gray-950 font-barlow font-600 text-lg'>{name}</h2>
            <div className='flex items-center justify-between text-base font-barlow font-600'>
                <span className='flex-2 text-gray-600'>{rating} </span>
                <span className='flex-1 text-gray-600'>{reviews} </span>
                <span className='flex-1 text-gray-950 font-700'>{price} ₺</span>
            </div>
        </Link>
    )
}


export default PizzaCard
