import styled, { CSSObject } from '@emotion/styled'

import { configureStyle } from '@/core/utils/emotions'

import { ButtonProps } from './Button'

const config = configureStyle<ButtonProps>()

// 둥글기 처리
const useRoundedStyle = config('rounded', {
  full: {
    borderRadius: '9999px'
  },
  normal: {
    borderRadius: '8px'
  },
  small: {
    borderRadius: '4px'
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
    height: '36px'
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
  ...useRoundedStyle(props),
  ...useWidthStyle(props),
  ...useHeightStyle(props),
  ...useDisableStyle(props),
  ...useThemeStyle(props)
}))

export default ButtonStyled
