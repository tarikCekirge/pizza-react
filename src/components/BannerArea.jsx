import React from 'react'
import BannerOne from '../UI/BannerOne'
import bannerBgOne from '../assets/images/bannerBgOne.png';
import bannerBgTwo from '../assets/images/bannerBgTwo.png';

import Container from './Container'
import BannerTwo from '../UI/BannerTwo';
import BannerButton from '../UI/BannerButton';
import bannerImagePizza from '../assets/images/bannerImagePizza.png'
import bannerImageFast from '../assets/images/bannerImageFast.png'
const BannerArea = () => {
    return (
        <Container>
            <div className='grid md:grid-cols-2 gap-4 py-12'>
                <BannerOne url={'order'} bg={bannerBgOne} urlText={"Sipariş Ver"} title={"Özel Lezzetus"} content={"Position:Absolute Acı Burger"} />
                <div className='grid grid-rows-2 gap-4'>
                    <BannerTwo
                        leftArea={
                            <>

                                <div className='  flex flex-col gap-6'>
                                    <h4 className="text-white text-3xl font-barlow">Hackathlon <br /> Burger Menü</h4>
                                    <BannerButton to='/order' text={"Sipariş Ver"} />
                                </div>
                            </>

                        }
                        rightArea={<div>
                            <img className=' h-full ml-auto' src={bannerImagePizza} alt="" />
                        </div>}
                    />

                    <BannerTwo style={{ backgroundImage: `url(${bannerBgTwo})` }}
                        leftArea={
                            <>

                                <div className=' flex flex-col gap-6'>
                                    <h4 className="text-gray-950 font-600 text-3xl font-barlow"><span className='text-red-600'>Çoooook</span> hızlı <br /> npm gibi kurye </h4>
                                    <BannerButton to='/order' text={"Sipariş Ver"} />
                                </div>
                            </>

                        }
                        rightArea={<div >
                            <img className=' h-full ml-auto' src={bannerImageFast} alt="" />
                        </div>}
                    />

                </div>
            </div>
        </Container>
    )
}

export default BannerArea
