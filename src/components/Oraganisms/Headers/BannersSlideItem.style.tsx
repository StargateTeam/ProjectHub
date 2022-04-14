import styled from '@emotion/styled'

import Box from '@/components/Atoms/Box'
import Text from '@/components/Atoms/Text'

export const BannersItemWrap = styled.div<{ imgSrc: string }>`
  width: 100vw;
  height: 416px;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  ::after {
    width: 100%;
    height: 100%;
    content: '';
    background-image: ${(props) => {
      return `url(${props.imgSrc}) `
    }};
    position: absolute;
    top: 0;
    left: 0;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    border-bottom: 1px solid silver;
    filter: blur(12px);
    z-index: -1;
  }
`

export const ZoomInBannerImg = styled.img`
  width: 368px;
  height: 248px;
  background-size: cover;
  filter: blur(0px);
`

export const UserTextWrap = styled(Box)``

export const WelcomeUserText = styled(Text)``
