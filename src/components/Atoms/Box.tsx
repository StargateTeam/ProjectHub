import { defaultStyle } from '@/core/utils/createDefaultStyle'

import BoxStyled from './Box.style'

export type BoxProps = React.PropsWithChildren<defaultStyle>

const Box = (props: BoxProps) => (
  <BoxStyled {...props}>{props.children}</BoxStyled>
)

export default Box
