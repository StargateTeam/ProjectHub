import styled from '@emotion/styled'

import Box from '@/components/Atoms/Box'
import Text from '@/components/Atoms/Text'

export const BannersItemWrap = styled.div`
  width: 100vw;
  height: 416px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const OverlayImage = styled.div`
  background-color: #61616147;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
`

export const BannerBgImg = styled.picture`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -2;
`

export const SourceImage = styled.source`
  width: 100vw;
  object-fit: cover;
`

export const DefaulImage = styled.img`
  width: 100vw;
  object-fit: cover;
`

export const ZoomInBannerImg = styled.img`
  width: 368px;
  height: 248px;
  background-size: cover;
  filter: blur(0px);
  border: 1px solid silver;
`

export const UserTextWrap = styled(Box)``

export const WelcomeUserText = styled(Text)`
  padding-left: 16px;
`

export const UserInfoWrap = styled(Box)``
