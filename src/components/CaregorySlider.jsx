import React from 'react'
import CategoryButton from '../UI/CategoryButton'
import burger from '../assets/images/categories/burger.png'
import Container from './Container'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const CaregorySlider = ({ backGround = 'bg-white' }) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        swipeToSlide: true,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    autoplay: true,
                    speed: 5000,
                    autoplaySpeed: 3000
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 0
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };

    return (
        <section className={`${backGround} px-4 py-3 overflow-hidden`}>
            <Container>
                <div className="slider-container">
                    <Slider {...settings}>
                        <CategoryButton img={burger} title={"Yeni! Kore"} url={"/order"} />
                        <CategoryButton img={burger} title={"Pizza"} url={"/order"} />
                        <CategoryButton img={burger} title={"Burger"} url={"/order"} />
                        <CategoryButton img={burger} title={"Kızartmalar"} url={"/order"} />
                        <CategoryButton img={burger} title={"Fest Food"} url={"/order"} />
                        <CategoryButton img={burger} title={"Gazlı İçecek"} url={"/order"} />
                    </Slider>
                </div>
            </Container>
        </section>
    )
}

export default CaregorySlider
