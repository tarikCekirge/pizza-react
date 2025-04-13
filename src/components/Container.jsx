import React from 'react'

const Container = ({ className, children }) => {
    return (
        <div className={`container mx-auto px-4`}>
            <div className='lg:px-[15%]'>
                {children}
            </div>
        </div>
    )
}

export default Container
