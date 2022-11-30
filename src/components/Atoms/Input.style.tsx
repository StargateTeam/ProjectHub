import styled from '@emotion/styled'

import createDefaultStyle from '@/core/utils/createDefaultStyle'
import { configureStyle } from '@/core/utils/emotions'

import { InputProps } from './Input'

const config = configureStyle<InputProps>()

// 테마 처리
const useThemeStyle = config('theme', {
  outline: {
    transition: '.3s cubic-bezier(.25,.8,.5,1)',
    border: 0,
    borderBottom: '1px solid black',
    ':focus-visible': {
      outline: 0
    },
    ':focus': {
      borderBottom: '1px solid #1fc7c1'
    }
  }
})

const InputStyled = styled.input<InputProps>((props) => ({
  ...createDefaultStyle(props),
  ...useThemeStyle(props)
}))

export default InputStyled
