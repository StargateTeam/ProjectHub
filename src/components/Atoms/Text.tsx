import type { GridSizeType } from '@/constants/styles/gridSize'

import TextStyled from './Text.style'

export declare type ResponsiveValue<T> =
  | T
  | null
  | undefined
  | Array<T | null>
  | {
      [key in string | number]?: T
    }

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
