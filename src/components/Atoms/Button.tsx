import React from 'react'

import { defaultStyle } from '@/core/utils/createDefaultStyle'

import ButtonStyled from './Button.style'

export type ButtonProps = React.PropsWithChildren<
  defaultStyle & {
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
    buttonType?: 'button' | 'submit' | 'reset'
    style?: React.CSSProperties
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  }
>

const Button = (props: ButtonProps) => {
  return <ButtonStyled {...props}>{props.children}</ButtonStyled>
}

export default Button
