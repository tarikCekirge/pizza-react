import React from 'react'
import Container from './Container'
import LinkButton from '../UI/LinkButton'
import shapeOne from '../assets/images/shapeOne.png'
import shapeTwo from '../assets/images/shapeTwo.png'
import pizzaImg from '../assets/images/pizzaImg.png'
import backImg from '../assets/images/backImg.png'

const Hero = () => {
    return (
        <section className="bg-red-600  md:min-h-dvh pt-6 lg:pt-18 relative overflow-hidden isolate">

            <div className='flex flex-col gap-2'>
                <div className='flex flex-col items-center justify-center text-center gap-8'>
                    <h1 className='text-4xl md:text-5xl lg:text-6xl font-londrina text-white'>Teknolojik Yemekler</h1>
                    <h2 className='text-5xl md:text-6xl lg:text-8xl font-roboto text-white font-200 leading-none'>KOD ACIKTIRIR <br />
                        PİZZA DOYURUR</h2>
                    <LinkButton to="/order" text="ACIKTIM" />
                </div>


                <div className=' flex-1 w-full'>
                    <img className='-z-10 md:absolute  bottom-0 max-h-1/2  md:left-1/2 md:-translate-x-1/2' src={pizzaImg} />
                    <img className='-z-10 absolute bottom-0 w-full hidden md:block' src={backImg} />

                </div>
            </div>


            <img className='shape one' src={shapeOne} />
            <img className='shape two' src={shapeTwo} />


        </section>
    )
}

export default Hero
