import { Button as ButtonStyle } from './Button.style'

export type ButtonProps = React.PropsWithChildren<{
  rounded?: 'none' | 'small' | 'normal' | 'full'
  width?: 'full' | 'fit'
  height?: 'small' | 'medium' | 'large'
  theme?:
    | 'primary'
    | 'primaryStroke'
    | 'gray'
    | 'white'
    | 'grayStroke'
    | 'lightGrayStroke'
    | 'disabled'
    | 'whiteStroke'
  disabled?: boolean
  className?: string
  buttonType?: 'button' | 'submit' | 'reset'
  style?: React.CSSProperties
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}>

const Button = ({ children, ...rest }: ButtonProps) => {
  return <ButtonStyle {...rest}>{children}</ButtonStyle>
}

export default Button
