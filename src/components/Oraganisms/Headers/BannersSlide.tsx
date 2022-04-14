// Import Swiper styles
import 'swiper/css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

import BannersSlideItem from './BannersSlideItem'

/*
onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
*/

export default function UserSlide() {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      pagination={{
        clickable: true
      }}
    >
      <SwiperSlide>
        <BannersSlideItem />
      </SwiperSlide>
      <SwiperSlide>
        <BannersSlideItem />
      </SwiperSlide>
      <SwiperSlide>
        <BannersSlideItem />
      </SwiperSlide>
      <SwiperSlide>
        <BannersSlideItem />
      </SwiperSlide>
    </Swiper>
  )
}
