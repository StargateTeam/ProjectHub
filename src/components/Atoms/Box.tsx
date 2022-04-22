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

  bgColor?: IColors
  space?: ResponsiveValue<keyof GridSizeType | (string & {})>
  pt?: ResponsiveValue<keyof GridSizeType | (string & {})>
  px?: ResponsiveValue<keyof GridSizeType | (string & {})>
  py?: ResponsiveValue<keyof GridSizeType | (string & {})>
  mx?: ResponsiveValue<keyof GridSizeType | (string & {})>
  my?: ResponsiveValue<keyof GridSizeType | (string & {})>
  ml?: ResponsiveValue<keyof GridSizeType | (string & {})>
  mr?: ResponsiveValue<keyof GridSizeType | (string & {})>
  rounded?: ResponsiveValue<keyof GridSizeType | (string & {})>
  className?: string
  style?: React.CSSProperties
}>

const Box = (props: BoxProps) => (
  <BoxStyled {...props}>{props.children}</BoxStyled>
)

export default Box
