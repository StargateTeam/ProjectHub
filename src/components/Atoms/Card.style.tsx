import styled from '@emotion/styled'

import { configureStyle } from '@/core/utils/emotions'

import { CardProps } from './Card'

const config = configureStyle<CardProps>()

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

// 그림자 처리
const useShadowStyle = config('shadow', {
  true: {
    boxShadow:
      '0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)'
  }
})
const CardStyled = styled.div<CardProps>((props) => ({
  ...useRoundedStyle(props),
  ...useShadowStyle(props)
}))

export default CardStyled
