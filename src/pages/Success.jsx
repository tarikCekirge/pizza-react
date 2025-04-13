import { useEffect } from 'react'
import Container from '../components/Container'
import { useLocation, useNavigate } from 'react-router-dom';
import LinkButton from '../UI/LinkButton';

const SuccessPage = () => {
    const location = useLocation();
    const order = location.state?.order;
    const navigate = useNavigate()

    if (!order) {
        useEffect(() => {
            navigate("/");
        }, []);
        return null;
    }


    return (
        <section id='success' className='pt-6 pb-16 md:pt-14 md:pb-32'>
            <Container>
                <div className='flex flex-col items-center justify-center text-center gap-4 mx-auto'>
                    <h1 className='text-3xl md:text-4xl lg:text-6xl font-londrina text-white mb-2 md:mb-4 lg:mb-6'> Teknolojik Yemekler</h1>
                    <h2 className="font-satisfy text-4xl text-yellow-400">lezzetin yolda</h2>
                    <h6 className='text-5xl md:text-7 lg:text-9xl font-roboto text-white font-200 leading-none relative pb-6 mb-4 md:pb-12 md:mb-12 success-message'>Sipariş Alındı</h6>
                </div>
            </Container>
            <Container>
                <div className='flex flex-col gap-4 md:gap-8 my-6 mx-auto max-w-xl'>
                    <h4 className='text-white font-barlow font-500 text-3xl text-center'>{order.orderName}</h4>
                    <div className='md:px-12 md:max-w-2/3 w-full mx-auto '>
                        <div className='text-white font-barlow text-lg md:text-xl'>
                            <p><span>Boyut:</span> <span className='font-600'>{order.size}</span></p>
                            <p><span>Hamur:</span> <span className='font-600'>{order.dough}</span></p>
                            <p><span>Ek Malzemeler:</span> <span className='font-600'>
                                {order.dough && order.ingredients.join(", ")}
                            </span></p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-1 md:gap-6 lg:gap-8 my-6 mx-auto max-w-xl border border-white rounded-xl p-4 md:p-10 lg:p-14'>
                    <h4 className='text-white font-barlow font-500 text-2xl '>Sipariş Toplamı</h4>
                    <div className='text-white flex justify-between text-xl md:text-2xl font-barlow font-500 '>
                        <span>Seçimler</span>
                        <span>{order.extrasTotal || 0} ₺</span>
                    </div>
                    <div className='text-white flex justify-between text-xl md:text-2xl  font-barlow font-500 '>
                        <span>Toplam</span>
                        <span>{order.total || 0} ₺</span>
                    </div>
                </div>
            </Container>
            <Container>
                <div className='mx-auto flex justify-center'>
                    <LinkButton to="/" text="Ana Sayfaya Dön" />
                </div>
            </Container>
        </section>
    )
}

export default SuccessPage
