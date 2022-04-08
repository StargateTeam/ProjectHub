import { IColors } from '@/constants/styles/colorScheme'
import type { GridSizeType } from '@/constants/styles/gridSize'
import { ResponsiveValue } from '@/types/util'

import BoxStyled from './Box.style'

export type BoxProps = React.PropsWithChildren<{
  width?: ResponsiveValue<keyof GridSizeType | (string & {})>
  height?: ResponsiveValue<keyof GridSizeType | (string & {})>
  direction?: 'row' | 'column'
  hAlign?: 'left' | 'center' | 'right'
  vAlign?: 'top' | 'middle' | 'bottom'
  space?: keyof GridSizeType
  pt?: keyof GridSizeType
  px?: keyof GridSizeType
  bgColor?: IColors
  className?: string
  style?: React.CSSProperties
}>

const Box = (props: BoxProps) => (
  <BoxStyled {...props}>{props.children}</BoxStyled>
)

export default Box
