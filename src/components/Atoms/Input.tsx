import colorScheme from '@/constants/styles/colorScheme'

import InputStyled from './Input.style'

export type InputProps = React.PropsWithChildren<{
  rounded?: 'none' | 'small' | 'normal' | 'full'
  width?: 'full' | 'fit'
  height?: 'extraSmall' | 'small' | 'medium' | 'large'
  theme?: 'outline'
  className?: string
  style?: React.CSSProperties
  placeholder?: string
  bgColor?: keyof typeof colorScheme
}>

const Input = (props: InputProps) => {
  return <InputStyled {...props} />
}

export default Input