import LazyLoad from 'react-lazyload'

import { defaultStyle } from '@/core/utils/createDefaultStyle'

import {
  ImageBoxWrapperStyled,
  ImageStyled,
  LoadingStyled
} from './ImageBox.style'

export type ImageProps = defaultStyle & {
  imageHref: string
  style?: React.CSSProperties
}

export const ImageBox = (props: ImageProps) => {
  return (
    <ImageBoxWrapperStyled {...props}>
      <LazyLoad height={200} once placeholder={<LoadingStyled />}>
        <ImageStyled src={props.imageHref} />
      </LazyLoad>
    </ImageBoxWrapperStyled>
  )
}
