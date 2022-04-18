import styled from '@emotion/styled'

import colorScheme from '@/constants/styles/colorScheme'
import { configureStyle, makeStyleConst } from '@/core/utils/emotions'

import { InputProps } from './Input'

const config = configureStyle<InputProps>()

// 둥글기 처리
const useRoundedStyle = config('rounded', {
  full: {
    borderRadius: '9999px'
  },
  normal: {
    borderRadius: '4px'
  },
  small: {
    borderRadius: '2px'
  },
  none: {
    borderRadius: '0px'
  }
})

// 넓이 처리
const useWidthStyle = config('width', {
  full: {
    width: '100%'
  },
  fit: {
    width: 'auto',
    padding: '0px',
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem'
  }
})

// 높이 처리
const useHeightStyle = config('height', {
  large: {
    height: '64px'
  },
  medium: {
    fontSize: '1.125rem',
    lineHeight: '1.75rem',
    height: '52px'
  },
  small: {
    height: '36px',
    fontSize: '18px'
  },
  extraSmall: {
    fontWeight: 400,
    fontSize: '0.75rem',
    lineHeight: '1rem',
    paddingLeft: '11px',
    paddingRight: '11px',
    height: '28px'
  }
})

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

// 백그라운드 색상 처리
const useBgColorStyle = config(
  'bgColor',
  makeStyleConst(colorScheme, {
    styleKey: 'backgroundColor'
  })
)

const InputStyled = styled.input<InputProps>((props) => ({
  ...useRoundedStyle(props),
  ...useWidthStyle(props),
  ...useHeightStyle(props),
  ...useThemeStyle(props),
  ...useBgColorStyle(props)
}))

export default InputStyled
