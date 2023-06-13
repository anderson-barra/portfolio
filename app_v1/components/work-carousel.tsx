import { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { LanguageContext, PaletteContext } from '@/app/Contexts';
import useBreakpoint from "@/app/hooks/useBreakpoint";
import { StaticImageData } from "next/image";
import { openingSection } from "../contents";

export default function WorkCarousel({imagesSrc}: {imagesSrc: StaticImageData[]}) {
  const breakpoint = useBreakpoint();
  const [activeSlide, setActiveSlide] = useState(0);
  const languageContext = useContext(LanguageContext);
  const paletteContext = useContext(PaletteContext);

  const handleSlideChange = (swiperProps: any) => {
    setActiveSlide(swiperProps.activeIndex);
  }

  const SwiperButtonPrev = () => {
    const swiper = useSwiper();
    return activeSlide === 0
    ? null
    : (
      <div className="flex items-center justify-start inset-y-0 left-0 lg:right-[50%] absolute">
        <div onClick={() => swiper.slidePrev()} className="-m-2 px-2 lg:px-0 basis-1/2 rounded-r-lg h-full z-10 flex items-center justify-end cursor-pointer transition-colors hover:bg-black/25">
          <BsChevronLeft size={breakpoint === 'xs' || breakpoint === 'sm' || breakpoint === 'md' ? 30 : 50} color={paletteContext.icon.dark}></BsChevronLeft>
        </div>
      </div>
    );
  };
  
  
  const SwiperButtonNext = () => {
    const swiper = useSwiper();
    return activeSlide === imagesSrc.length - 1
    ? null
    : (
      <div className="flex items-center justify-end inset-y-0 lg:left-[50%] right-0 absolute">
        <div onClick={() => swiper.slideNext()} className="-m-2 px-2 lg:px-0 basis-1/2 rounded-l-lg h-full z-10 flex items-center justify-start cursor-pointer transition-colors hover:bg-black/25">
          <BsChevronRight size={breakpoint === 'xs' || breakpoint === 'sm' || breakpoint === 'md' ? 30 : 50} color={paletteContext.icon.dark}></BsChevronRight>
        </div>
      </div>
    );
  };

  return (
    <div>
      <p className={`max-w-5xl mx-auto p-3 ${paletteContext.text.lightest}`}>{ languageContext === "pt-BR" ? "Galeria" : "Gallery" }</p>
      <Swiper
        onSlideChange={handleSlideChange}
        slidesPerView={breakpoint === 'xs' || breakpoint === 'sm' || breakpoint === 'md' ? 1 : 2}
        centeredSlides={true}
        spaceBetween={10}
        grabCursor={true}
        className="w-full h-full"
      >
        {
          imagesSrc.map((src, i) => (
            <SwiperSlide key={i}>
              <div className="p-[5px] lg:p-0 flex justify-center items-center">
                {/* <img className="block w-full h-full rounded-lg object-cover" src={src} alt="" /> */}
                <Image className="block w-full h-full rounded-lg object-cover" src={src} alt=""/>
              </div>
            </SwiperSlide>
          ))
        }

        <SwiperButtonPrev></SwiperButtonPrev>
        <SwiperButtonNext></SwiperButtonNext>
      </Swiper>
    </div>
  );
};