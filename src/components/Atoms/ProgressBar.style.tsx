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
  }
})

// 높이 처리
const useHeightStyle = config(
  'height',
  makeStyleConst(GridSize, {
    styleKey: 'height'
  })
)

const ProgressBarStyled = styled.progress<ProgressProps>((props) => ({
  ...useWidthStyle(props),
  ...useHeightStyle(props)
}))

export default ProgressBarStyled
