import React from 'react'
import { Link } from 'react-router-dom'

const CategoryButton = ({ img, title, url }) => {
    return (
        <Link to={url} className='flex items-center justify-center gap-2 font-barlow text-lg font-600 text-gray-950 hover:text-white bg-white hover:bg-gray-950 w-fit px-5 py-3 rounded-full transition-colors mx-auto'>
            <img src={img} alt={title} className='size-10' />
            <span className='whitespace-nowrap'>{title}</span>
        </Link>
    )
}

export default CategoryButton
