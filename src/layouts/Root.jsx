import React, { useLayoutEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../components/Footer'

const RootLayout = () => {
    const location = useLocation();

    useLayoutEffect(() => { document.documentElement.scrollTo(0, 0); }, [location.pathname])
    return (
        <>

            <main> <Outlet /></main>
            <Footer />
        </>
    )
}

export default RootLayout
