import { defaultStyle } from '@/core/utils/createDefaultStyle'

import InputStyled from './Input.style'

export type InputProps = React.PropsWithChildren<
  Omit<defaultStyle, 'direction' | 'height' | 'width'> & {
    theme?: 'outline'
    className?: string
    style?: React.CSSProperties
    placeholder?: string
  }
>

const Input = (props: InputProps) => {
  return <InputStyled {...props} />
}

export default Input
