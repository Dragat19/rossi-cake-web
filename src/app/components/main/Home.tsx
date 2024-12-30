
"use client"

// core version + navigation, pagination modules:
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import { Element } from 'react-scroll';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

export const Home = () => {

    const images = [
        '/images/home/cookie-red.avif',
        '/images/home/cookies-no3.avif',
        '/images/home/cookies-no4.avif',
        '/images/home/cookies-no2.avif',
    ];

    return (
        <Element name='home' id="home" className="w-full bg-rose-50">
            <div className='grid grid-cols-1   md:grid-cols-2 gap-4 items-center justify-center py-6 md:py-12 md:container md:mx-auto'>
                <div className='flex flex-col justify-center gap-4 items-center px-4'>
                    <h2 className="font-brusher text-center text-4xl md:text-6xl  text-slate-800 ">Bienvenido a Pastelería Rossi</h2>
                    <h4 className="font-quicksand text-xl  md:text-3xl font-bold text-rose-500">El arte de endulzar tus momentos</h4>
                    <p className="text-slate-500 font-quicksand font-light  text-xs md:text-base text-center">Descubre nuestras irresistibles galletas artesanales, elaboradas con ingredientes frescos y un toque de amor. Perfectas para cada ocasión: desde un antojo hasta un regalo especial. ¡Haz de cada día un motivo para disfrutar!</p>
                </div>
                <div className="w-auto max-w-5xl">
                    <Swiper
                        modules={[Pagination, Autoplay, EffectFade]}
                        slidesPerView={1}
                        spaceBetween={0}
                        speed={800}
                        autoplay={{ delay: 3000, disableOnInteraction: false, }}
                        navigation={false}
                        loop={true}
                        effect="slide"
                        className="w-full h-[300px] sm:h-[400px] lg:h-[500px] custom-swiper"
                    >
                        {images.map((src, index) => (
                            <SwiperSlide key={index}>
                                <div className="w-full h-full">
                                    <img
                                        src={src}
                                        alt={`Slide ${index + 1}`}
                                        className="w-full h-full object-contain hover:scale-50"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>

        </Element>
    )
}
