import React from 'react'
import Container from './Container'
import orderDetail from '../assets/images/orderDetail.png'
import BreadCrumb from './BreadCrumb'

const OrderDetail = () => {
    return (
        <div>
            <Container>
                <div className='max-w-2xl mx-auto'>
                    <img src={orderDetail} className='w-full' />
                </div>
            </Container>
            <Container>
                <div className='max-w-2xl mx-auto py-6'>
                    <BreadCrumb />
                </div>
            </Container>
            <div>
                <Container>
                    <div className='max-w-2xl mx-auto py-6'>
                        <h2 className='font-barlow font-600 text-2xl'>Position Absolute Acı Pizza</h2>
                    </div>
                    <div className='max-w-2xl mx-auto flex items-center justify-start gap-12'>
                        <span className='text-4xl font-barlow font-700 mr-auto'>85.50₺</span>
                        <span className='text-gray-600'>4.9</span>
                        <span className='text-gray-600'>(200)</span>
                    </div>
                    <article className='max-w-2xl mx-auto text-gray-600 mt-6 leading-relaxed'>
                        <p>
                            Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.
                        </p>
                    </article>
                </Container>
            </div>
        </div>
    )
}

export default OrderDetail
