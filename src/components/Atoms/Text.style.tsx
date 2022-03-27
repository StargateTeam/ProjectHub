import styled from '@emotion/styled'

import GridSize from '@/constants/styles/gridSize'
import { configureStyle, makeStyleConst } from '@/core/utils/emotions'

import { TextProps } from './Text'

const config = configureStyle<TextProps>()

// 폰트 사이즈 처리
const useFontSizeStyle = config(
  'fontSize',
  makeStyleConst(GridSize, {
    styleKey: 'font-size'
  })
)

// 폰트 색상 처리
const useColorStyle = config(
  'color',
  makeStyleConst(GridSize, {
    styleKey: 'color'
  })
)

// 폰트 무게 처리
const useFontWeightStyle = config('fontWeight', {
  normal: {
    fontWeight: 400
  },
  medium: {
    fontWeight: 500
  },
  bold: {
    fontWeight: 600
  }
})

const TextStyled = styled.div<TextProps>((props) => ({
  ...useFontSizeStyle(props),
  ...useColorStyle(props),
  ...useFontWeightStyle(props)
}))

export default TextStyled
