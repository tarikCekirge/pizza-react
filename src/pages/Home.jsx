import React from 'react'
import Hero from '../components/Hero'
import CaregorySlider from '../components/CaregorySlider'
import BannerArea from '../components/BannerArea'
import Container from '../components/Container'
import ProductContainer from '../components/ProductContainer'
import PizzaCard from '../UI/PizzaCard'

const pizzaDetailData = [
    {
        name: 'Terminal Pizza',
        price: 85.50,
        rating: 4.9,
        reviews: 200,
        image: 'product2.png',
        descimageription: 'Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.'
    },
    {
        name: 'Position Absolute Acı Pizza',
        price: 85.50,
        rating: 4.9,
        reviews: 200,
        image: 'product1.png',
        descimageription: 'Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.'
    },
    {
        name: 'useEffect Tavuklu Burger',
        price: 85.50,
        rating: 4.9,
        reviews: 200,
        image: 'product3.png',
        descimageription: 'Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.'
    },
]



const HomePage = () => {
    return (
        <>
            <Hero />
            <CaregorySlider />
            <BannerArea />
            <Container>
                <div className='flex flex-col gap-2 items-center justify-center pb-6'>
                    <h4 className='font-satisfy text-4xl text-red-600 text-center'>en çopk paketlenen menüler</h4>
                    <h5 className='font-barlow text-4xl font-600 text-gray-950 text-center'>Acıktıran Kodlara Doyuran Lezzetler</h5>
                </div>
            </Container>
            <CaregorySlider backGround='bg-transparent' />
            <ProductContainer>
                {
                    pizzaDetailData.map((item, index) => <PizzaCard key={index} {...item} />)
                }
            </ProductContainer>
        </>
    )
}

export default HomePage
