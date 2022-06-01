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

export const BannerBgSVGWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -2;
`

export const BlurSVG = styled.svg``

export const BlurDefs = styled.defs``

export const BlurFilter = styled.filter``

export const BlurFeGaussianBlur = styled.feGaussianBlur``

export const BannerBgImg = styled.image``

export const ZoomInBannerImg = styled.img`
  width: 368px;
  height: 248px;
  border: 1px solid silver;
`

export const UserTextWrap = styled(Box)``

export const WelcomeUserText = styled(Text)`
  padding-left: 16px;
`

export const UserInfoWrap = styled(Box)``
