import React from 'react'
import { NavLink } from 'react-router-dom'

const BannerButton = ({ to = '/', text }) => {
    return (
        <NavLink to={to} className=' block w-fit h-fit font-barlow uppercase font-600 bg-white text-red-600 px-6 py-3 rounded-full hover:shadow-2xl'>
            {text}
        </NavLink>
    )
}

export default BannerButton
