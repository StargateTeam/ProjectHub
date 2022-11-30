import styled, { CSSObject } from '@emotion/styled'

import createDefaultStyle from '@/core/utils/createDefaultStyle'

import { BoxProps } from './Box'

const defaultStyle: CSSObject = {
  display: 'flex'
}

const BoxStyled = styled.div<BoxProps>((props) => ({
  ...defaultStyle,
  ...createDefaultStyle(props)
}))

export default BoxStyled
