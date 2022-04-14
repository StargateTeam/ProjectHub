import React from 'react'

import { BannersItemWrap, ZoomInBannerImg } from './BannersSlideItem.style'

const imgSrc =
  'https://cdn.pixabay.com/photo/2022/03/14/03/09/flower-7067252_960_720.jpg'

export default function UserSlideItem() {
  return (
    <BannersItemWrap imgSrc={imgSrc}>
      <ZoomInBannerImg src={imgSrc} />
    </BannersItemWrap>
  )
}
