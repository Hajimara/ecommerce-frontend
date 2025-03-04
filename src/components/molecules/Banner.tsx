'use client';

import 'swiper/css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { useRef } from 'react';

import IconButton from '@/components/atom/IconButton';
import LeftArrowIcon from '@/assets/LeftArrowIcon';
import RightArrowIcon from '@/assets/RightArrowIcon';
import Link from '@/components/atom/Link';

import type { Swiper as SwiperClass } from 'swiper/types';

interface IBannerProps {
  urlList: string[];
}

function Banner({ urlList }: IBannerProps) {
  const swiperRef = useRef<SwiperClass | undefined>();

  return (
    <div
      className={'group relative m-[0px_auto_40px] h-[370px] max-w-[1900px]'}
    >
      <Swiper
        modules={[Navigation, Autoplay]}
        loop={true} // 무한 루프 활성화
        autoplay={{
          delay: 5000, // 3초마다 변경
          disableOnInteraction: false, // 사용자가 터치해도 autoplay 유지
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        // onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)} // 현재 슬라이드 인덱스 업데이트
      >
        {/* 슬라이드 내용 */}
        {urlList.map((item, index) => {
          return (
            <SwiperSlide key={item + index}>
              <Link href={'/main'}>
                <div className={'relative w-full min-w-[1050px] pb-[370px]'}>
                  <div className="absolute inset-0 m-0 box-border block size-auto overflow-hidden border-0 bg-transparent p-0 opacity-100">
                    <img
                      src={item}
                      alt={item}
                      className="absolute inset-0 m-auto box-border block size-0 max-h-full min-h-full min-w-full max-w-full border-0 object-cover p-0"
                    />
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <IconButton
        iconType={'svg'}
        SvgComponent={LeftArrowIcon}
        svgProps={{
          height: 40,
          width: 40,
          color: 'white',
        }}
        className={
          'absolute left-m top-[175] z-10 my-auto ml-0 mr-[590px]  rounded-full bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-50'
        }
        onClick={() => swiperRef.current?.slidePrev()}
      />
      <IconButton
        iconType={'svg'}
        SvgComponent={RightArrowIcon}
        svgProps={{
          height: 40,
          width: 40,
          color: 'white',
        }}
        className={
          'absolute right-m top-[175] z-10 my-auto ml-[590px] rounded-full bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-50'
        }
        onClick={() => {
          swiperRef.current?.slideNext();
        }}
      />
    </div>
  );
}

export default Banner;
