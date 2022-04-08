import React from 'react'

import ButtonStyled from './Button.style'

export type ButtonProps = React.PropsWithChildren<{
  rounded?: 'none' | 'small' | 'normal' | 'full'
  width?: 'full' | 'fit'
  height?: 'extraSmall' | 'small' | 'medium' | 'large'
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

const Button = (props: ButtonProps) => {
  return <ButtonStyled {...props}>{props.children}</ButtonStyled>
}

export default Button
