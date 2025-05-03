//import Image from 'next/image';
import SwiperMain from "swiper";
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Autoplay,Pagination } from 'swiper/modules';

import 'swiper/css';
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { SwiperContainer } from "swiper/element";
//import SearchSystem from './SearchSystem';

const debounce = (func: { (): void; apply?: any; }, delay: number | undefined) => {
    let timeout: string | number | NodeJS.Timeout | undefined;
    return (...args: any) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
};

export default function MainVisualWrap() {
    const [activeIndex, setActiveIndex] = useState(0);
    SwiperMain.use([Autoplay,Pagination]);
    const swiperRef = useRef<SwiperRef>(null);

    const updateSwiper = useCallback(debounce(() => {
            if (swiperRef.current) {
                // Swiper 인스턴스를 초기화
                swiperRef.current.swiper.update();
            }
        }, 300), []
    );
    
    useEffect(() => {
        const resizeObserver = new ResizeObserver(updateSwiper);
        resizeObserver.observe(document.body); // body를 관찰하여 크기 변화 감지

        return () => {
            resizeObserver.disconnect(); // 컴포넌트 언마운트 시 관찰 중지
        };
    }, [updateSwiper]);

    const photos = [
        {
            url: '/main_visual02.jpg',
            alt: '/main_visual02.jpg',
            className: 'pc',
            stext: '이진케어시스템',
            stitle: '이진케어시스템',
            ttitle: '이진케어시스템',
            objectPosition: '95% 50%',
        },
        {
            url: '/main_visual01.jpg',
            alt: '/main_visual01.jpg',
            className: 'pc',
            stitle: '이진케어시스템',
            ttitle: '이진케어시스템',
            objectPosition: '55% 90%',
        },
    ]
    return (
        <Swiper
            ref={swiperRef}
            modules={[Autoplay,Pagination]}
            loop={true} // Enable infinite looping
            slidesPerView={1}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
            className='filter shadow-lg !h-[70vh]'
        >
            {photos.map(el => {
                return (
                    <SwiperSlide key={el.url} className='swiper-slide-keyvisual'>
                        <div className="relative w-full h-screen overflow-hidden">
                            <Image
                                src={el.url}
                                alt={el.alt}
                                width={100}
                                height={100}
                                className={`animate-zoom object-cover transition-transform duration-500 transform ${
                                    activeIndex === 1 ? 'scale-150 md:scale-125' : 'scale-130 md:scale-110'
                                }`}
                                style={{ objectPosition: el.objectPosition, transformOrigin: el.objectPosition }}
                            />
                            <div className="flex-1 w-full lg:w-4/5">
                                <div className="textOverlay flex flex-col items-start justify-center absolute top-0 right-0 z-20 w-1/2 h-full pl-12 leading-[1.3]">
                                    <span className='sub_tit text-xl sm:text-2xl text-white'>{photos[0].stitle}</span>
                                    <span className='tit text-2xl sm:text-4xl text-white mt-1'>{photos[0].ttitle}</span>
                                    <div className="more_btn">
                                        <a href="#" className="inline-flex items-center whitespace-nowrap translate-y-full py-4 px-6 bg-[#2d3e4e] text-white text-base font-medium rounded-full leading-none" target="_self">
                                            조회시스템 바로 가기
                                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="#ffffff"><path d="M440.6 273.4c4.7-4.5 7.4-10.8 7.4-17.4s-2.7-12.8-7.4-17.4l-176-168c-9.6-9.2-24.8-8.8-33.9 .8s-8.8 24.8 .8 33.9L364.1 232 24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l340.1 0L231.4 406.6c-9.6 9.2-9.9 24.3-.8 33.9s24.3 9.9 33.9 .8l176-168z"></path></svg>
                                        </a>
                                    </div>
                                </div>      
                            </div>
                        </div>
                    </SwiperSlide>

                )
            })}
        </Swiper>       
    )
}