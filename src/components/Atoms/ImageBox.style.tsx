import { CSSObject } from '@emotion/react'
import Image from 'next/image'
import styled from 'styled-components'

import colors from '@/constants/styles/colorScheme'
import createDefaultStyle from '@/core/utils/createDefaultStyle'

import { ImageProps } from './ImageBox'

const defaultStyled: CSSObject = { display: 'flex' }

export const ImageBoxWrapperStyled = styled.div<ImageProps>((props) => ({
  ...defaultStyled,
  ...createDefaultStyle(props)
}))

export const ImageStyled = styled.img`
  width: 100%;
  height: 100%;
  animation: boxFade 0.3s linear;
  object-fit: contain;
  @keyframes boxFade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

export const LoadingStyled = styled.div`
  background-color: ${colors.gray};
  width: 100%;
  height: 100%;
`
