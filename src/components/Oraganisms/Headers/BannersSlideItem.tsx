import React from 'react'

import {
  BannerBgImg,
  BannerBgSVGWrap,
  BannersItemWrap,
  BlurDefs,
  BlurFeGaussianBlur,
  BlurFilter,
  BlurSVG,
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
      <BannerBgSVGWrap>
        <BlurSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
          <BlurDefs>
            <BlurFilter id="blur1">
              <BlurFeGaussianBlur stdDeviation="2" />
            </BlurFilter>
          </BlurDefs>
          <BannerBgImg
            xlinkHref={imgSrc}
            x="-50%"
            y="-60%"
            filter="url(#blur1)"
          />
        </BlurSVG>
      </BannerBgSVGWrap>
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

/**
 * 아래가 되는 코드
 */
// import React from 'react'

// import {
//   BannerBgImg,
//   BannerBgSVG,
//   BannersItemWrap,
//   DefaulImage,
//   OverlayImage,
//   SourceImage,
//   UserInfoWrap,
//   UserTextWrap,
//   WelcomeUserText,
//   ZoomInBannerImg
// } from './BannersSlideItem.style'
// import UserInfoCircle from './UserInfoCircle'

// type SlideItemPropsType = {
//   imgSrc: string
//   name: string
//   totalCountData: Array<number>
// }

// export default function UserSlideItem({
//   imgSrc,
//   name,
//   totalCountData
// }: SlideItemPropsType) {
//   return (
//     <BannersItemWrap>
//       <BannerBgSVG>
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
//           <defs>
//             <filter id="blur1">
//               <feGaussianBlur stdDeviation="2" />
//             </filter>
//           </defs>
//           <image xlinkHref={imgSrc} x="-50%" y="-60%" filter="url(#blur1)" />
//         </svg>
//       </BannerBgSVG>
//       {/* <BannerBgImg>
//         <SourceImage srcSet={imgSrc} />
//         <DefaulImage src={imgSrc} />
//       </BannerBgImg> */}
//       <OverlayImage />
//       <ZoomInBannerImg src={imgSrc} />
//       <UserTextWrap
//         direction="column"
//         vAlign="top"
//         hAlign="left"
//         pt={4}
//         px={12}
//       >
//         <WelcomeUserText fontSize={8} fontWeight="bold" color="white">
//           어서오세요 {name} 님
//         </WelcomeUserText>
//         <UserInfoWrap>
//           {totalCountData.map((count, idx) => (
//             <UserInfoCircle key={idx} count={count} idx={idx} />
//           ))}
//         </UserInfoWrap>
//       </UserTextWrap>
//     </BannersItemWrap>
//   )
// }
