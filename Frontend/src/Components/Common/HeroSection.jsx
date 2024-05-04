import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import slider1 from '/slider1.png'
// import slider2 from '/slider2.png'
// import slider3 from '/slider3.png'

// Swiper Css
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const HeroSection = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper px-10 md:h-auto h-[650px]"
            >
                <SwiperSlide className="swiper-slide">
                    <div className='h-full  '>
                        <img src="/Slider1.png" alt="slider1" className="w-full h-full object-contain md:block hidden" />
                        <img src="/SliderPhone1.png" alt="slider1" className="w-full h-full object-cover block md:hidden block object-top" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className='h-full  '>
                        <img src="/Slider2.png" alt="slider1" className="w-full h-full object-contain md:block hidden" />
                        <img src="/SliderPhone2.png" alt="slider1" className="w-full h-full object-cover block md:hidden block object-top" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className='h-full  '>
                        <img src="/Slider3.png" alt="slider1" className="w-full h-full object-contain md:block hidden" />
                        <img src="/SliderPhone3.png" alt="slider1" className="w-full h-full object-cover block md:hidden block object-top" />
                    </div>
                </SwiperSlide>
                <div className="autoplay-progress absolute right-4 bottom-4 flex items-center justify-center w-12 h-12 z-10">
                    <svg viewBox="0 0 48 48" ref={progressCircle} className="w-full h-full">
                        <circle cx="24" cy="24" r="20" fill="none" strokeWidth="4" stroke="var(--swiper-theme-color)"></circle>
                    </svg>
                    <span ref={progressContent} className="font-bold text-lg text-white"></span>
                </div>
            </Swiper>
        </>
    );
};

export default HeroSection;