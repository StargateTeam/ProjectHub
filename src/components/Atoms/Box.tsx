import type { GridSizeType } from '@/constants/styles/gridSize'

import BoxStyled from './Box.style'

export type BoxProps = React.PropsWithChildren<{
  width?: keyof GridSizeType
  height?: keyof GridSizeType
  direction?: 'row' | 'column'
  hAlign?: 'left' | 'center' | 'right'
  vAlign?: 'top' | 'middle' | 'bottom'
  space?: keyof GridSizeType
  pt?: keyof GridSizeType
  px?: keyof GridSizeType

  className?: string
  style?: React.CSSProperties
}>

const Box = (props: BoxProps) => (
  <BoxStyled {...props}>{props.children}</BoxStyled>
)

export default Box
