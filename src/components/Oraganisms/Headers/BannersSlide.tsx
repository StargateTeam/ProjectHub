import { EffectFade, Mousewheel } from 'swiper'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

import type { interviewerBannersInfo } from '@/types/interview'

import BannersSlideItem from './BannersSlideItem'

type BannerSlidePropsType = {
  banners: interviewerBannersInfo
}

/*
onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
*/

export default function UserSlide({ banners }: BannerSlidePropsType) {
  const imagesSrc = banners.imageSrc
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      loop={true}
      pagination={{
        clickable: true
      }}
      mousewheel={true}
      modules={[EffectFade, Mousewheel]}
      effect="fade"
    >
      {imagesSrc.map((img) => (
        <SwiperSlide key={img}>
          <BannersSlideItem
            key={img}
            imgSrc={img}
            name={banners.userName}
            totalCountData={banners.totalJobInterviewCount}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
