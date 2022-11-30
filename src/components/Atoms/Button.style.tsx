import styled, { CSSObject } from '@emotion/styled'

import createDefaultStyle from '@/core/utils/createDefaultStyle'
import { configureStyle } from '@/core/utils/emotions'

import { ButtonProps } from './Button'

const config = configureStyle<ButtonProps>()

// 비활성화 처리
const useDisableStyle = config('disabled', {
  true: {
    opacity: 50,
    cursor: 'not-allowed'
  }
})

// 테마 처리
const useThemeStyle = config('theme', {
  primary: {
    backgroundColor: '#1fc7c1',
    color: 'white',
    border: 0
  }
})

const defaultStyle: CSSObject = {
  transition: '.3s cubic-bezier(.25,.8,.5,1)',
  cursor: 'pointer',
  ':active': {
    backgroundColor: '#189c98'
  }
}

const ButtonStyled = styled.button<ButtonProps>((props) => ({
  ...defaultStyle,
  ...createDefaultStyle(props),
  ...useDisableStyle(props),
  ...useThemeStyle(props)
}))

export default ButtonStyled
