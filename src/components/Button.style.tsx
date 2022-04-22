import styled from 'styled-components'

import { ButtonProps } from './Button'

const useWidthStyle = (width: ButtonProps['width']) => {
  switch (width) {
    case 'full':
      return '100%'
    case 'fit':
      return '50%'
  }
}

const useRoundedStyle = (rounded: ButtonProps['rounded']) => {
  switch (rounded) {
    case 'full':
      return '9999px'
    case 'normal':
      return '16px'
    case 'small':
      return '6px'
  }
}

const useHeightStyle = (height: ButtonProps['height']) => {
  switch (height) {
    case 'large':
      return '120px'
    case 'medium':
      return '52px'
    case 'small':
      return '24px'
  }
}

const useTypeStyle = (type: ButtonProps['theme']) => {
  switch (type) {
    case 'primary':
      return `
        background-color: #1fc7c1;
        border: 0;
        color: #ffffff;
        font-weight: bold;
        font-size: 16px;

        &:hover {
          background-color: #1fed7c;
          border: 2px solid blue;
        }
      `

    case 'white':
      return `
        background-color: #ffffff;
        color: black;
        font-weight: bold;
        font-size: 16px;

        &:hover {
          background-color: wheat;
          color: black;
        }
      `
    // TODO: 추후 작성 예정
  }
}

const Button = styled.button<ButtonProps>`
  width: ${(props) => useWidthStyle(props.width)};
  border-radius: ${(props) => useRoundedStyle(props.rounded)};
  height: ${(props) => useHeightStyle(props.height)};
  ${(props) => useTypeStyle(props.theme)};
`

export { Button }
