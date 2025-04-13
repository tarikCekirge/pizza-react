import React from 'react'
import Container from './Container'
import Divider from './Divider'
import { FaLinkedin } from "react-icons/fa";
import location from '../assets/images/location.png';
import envelope from '../assets/images/envelope.png'
import phone from '../assets/images/phone.png'
import { Link } from 'react-router-dom';
import InstagramPosts from './InstagramPosts';


const Footer = () => {
    return (
        <footer>
            <Container>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8 '>
                    <div className='col-span-full  lg:col-span-1 '>
                        <h6 className='font-londrina text-5xl sm:text-5xl md:text-6xl xl:text-7xl font-400'>Teknolojik Yemekler</h6>
                        <address className='font-barlow text-base mt-4 not-italic'>
                            <p><img src={location} alt="Address" /> <span>341 Londonderry Road, Istanbul Türkiye</span></p>
                            <p><a href="mailto:aciktim@teknolojikyemekler.com"> <img src={envelope} alt="Address" /><span>aciktim@teknolojikyemekler.com</span></a></p>
                            <p><a href="tel:+902161234567"><img src={phone} alt="Address" /> <span>+90 216 123 45 67</span></a></p>
                        </address>
                    </div>
                    <div className='pt-[0rem] lg:pt-[6rem]'>
                        <h6 className='text-2xl font-barlow font-500 mb-2 lg:mb-4'>Hot Menu</h6>
                        <div className='space-y-2 grid'>
                            <Link to="/menu" className='menu-link'>Terminal Pizza</Link>
                            <Link to="/menu" className='menu-link'>5 Kişilik Hackathlon Pizza</Link>
                            <Link to="/menu" className='menu-link'>useEffect Tavuklu Pizza</Link>
                            <Link to="/menu" className='menu-link'>Beyaz  Console Frosty</Link>
                            <Link to="/menu" className='menu-link'>Testler Geçti Mutlu Burger</Link>
                            <Link to="/menu" className='menu-link'>Position Absolute Acı Burger</Link>
                        </div>
                    </div>
                    <div className='pt-[0rem]  lg:pt-[6rem]'>
                        <h6 className='text-2xl font-barlow font-500 mb-2 lg:mb-4'>Instagram</h6>
                        <InstagramPosts />
                    </div>
                </div>

            </Container>
            <Divider mode="light" />
            <Container>
                <div className='pt-4 pb-8 flex items-center justify-between gap-2 '>
                    <small className='font-barlow text-base '>&copy; {new Date().getFullYear()} Teknolojik Yemekler.</small>
                    <a target='_blank' href="https://www.linkedin.com/in/tarikcekirge/"><FaLinkedin className='text-white hover:text-yellow-400  text-xl' /></a>

                </div>
            </Container>
        </footer>
    )
}

export default Footer
