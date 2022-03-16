import type { GridSizeType } from '@/constants/styles/gridSize'
import { ResponsiveValue } from '@/types/util'

import TextStyled from './Text.style'

export type TextProps = React.PropsWithChildren<{
  fontSize?: ResponsiveValue<keyof GridSizeType | (string & {})>
  fontWeight?: 'bold' | 'medium' | 'normal'
  color?: string
  className?: string
}>

const Text = (props: TextProps) => (
  <TextStyled {...props}>{props.children}</TextStyled>
)

export default Text
