import styled from '@emotion/styled'

import GridSize from '@/constants/styles/gridSize'
import { configureStyle, makeStyleConst } from '@/core/utils/emotions'

import { ProgressProps } from './ProgressBar'

const config = configureStyle<ProgressProps>()

// 넓이 처리
const useWidthStyle = config('width', {
  full: {
    width: '100%'
  },
  fit: {
    width: 'auto',
    padding: '0px',
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem'
  },
  inherit: {
    width: 'inherit'
  }
})

// 높이 처리
const useHeightStyle = config(
  'height',
  makeStyleConst(GridSize, {
    styleKey: 'height'
  })
)

// 패딩(탑) 처리
// 팩토리만들기
const useMarginYStyle = config(
  'marginTopBottom',
  makeStyleConst(GridSize, {
    factory: (styleUnit) => ({
      marginTop: styleUnit,
      marginBottom: styleUnit
    })
  })
)

// 패딩(좌우) 처리
const usePaddingXStyle = config(
  'marginLeftRight',
  makeStyleConst(GridSize, {
    factory: (styleUnit) => ({
      marginLeft: styleUnit,
      marginRight: styleUnit
    })
  })
)

const ProgressBarStyled = styled.progress<ProgressProps>((props) => ({
  ...useWidthStyle(props),
  ...useHeightStyle(props),
  ...useMarginYStyle(props),
  ...usePaddingXStyle(props)
}))

export default ProgressBarStyled
