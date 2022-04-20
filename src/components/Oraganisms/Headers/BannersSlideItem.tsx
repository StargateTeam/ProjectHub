import React from 'react'

import {
  BannerBgImg,
  BannersItemWrap,
  DefaulImage,
  SourceImage,
  UserInfoWrap,
  UserTextWrap,
  WelcomeUserText,
  ZoomInBannerImg
} from './BannersSlideItem.style'
import UserInfoCircle from './UserInfoCircle'

type SlideItemPropsType = {
  imgSrc: string
  name: string
  totalCountData: Array<number>
}

export default function UserSlideItem({
  imgSrc,
  name,
  totalCountData
}: SlideItemPropsType) {
  return (
    <BannersItemWrap>
      <BannerBgImg>
        <SourceImage srcSet={imgSrc} />
        <DefaulImage src={imgSrc} />
      </BannerBgImg>
      <ZoomInBannerImg src={imgSrc} />
      <UserTextWrap
        direction="column"
        vAlign="top"
        hAlign="left"
        pt={4}
        px={12}
      >
        <WelcomeUserText fontSize={8} fontWeight="bold" color="white">
          어서오세요 {name} 님
        </WelcomeUserText>
        <UserInfoWrap>
          {totalCountData.map((count, idx) => (
            <UserInfoCircle key={idx} count={count} idx={idx} />
          ))}
        </UserInfoWrap>
      </UserTextWrap>
    </BannersItemWrap>
  )
}
