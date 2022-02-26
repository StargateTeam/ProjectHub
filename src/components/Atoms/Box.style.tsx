import styled, { CSSObject } from '@emotion/styled'

import GridSize from '@/constants/styles/gridSize'
import { configureStyle, makeStyleConst } from '@/core/utils/emotions'

import { BoxProps } from './Box'

const config = configureStyle<BoxProps>()

// 넓이 처리
const useWidthStyle = config(
  'width',
  makeStyleConst(GridSize, {
    styleKey: 'width'
  })
)

// 높이 처리
const useHeightStyle = config(
  'height',
  makeStyleConst(GridSize, {
    styleKey: 'height'
  })
)

// 패딩(탑) 처리
// 팩토리만들기
const usePaddingTopStyle = config(
  'pt',
  makeStyleConst(GridSize, {
    styleKey: 'paddingTop'
  })
)

// 패딩(좌우) 처리
const usePaddingXStyle = config(
  'px',
  makeStyleConst(GridSize, {
    factory: (styleUnit) => ({
      paddingLeft: styleUnit,
      paddingRight: styleUnit
    })
  })
)

// flex 수평 처리
const useHorizontalStyle = config('hAlign', (props) => {
  if (props.direction === 'column') {
    return {
      left: {
        alignItems: 'flex-start'
      },
      center: {
        alignItems: 'center'
      },
      right: {
        alignItems: 'flex-end'
      }
    }
  } else {
    return {
      left: {
        justifyContent: 'flex-start'
      },
      center: {
        justifyContent: 'center'
      },
      right: {
        justifyContent: 'flex-end'
      }
    }
  }
})

// flex 수직 처리
const useVerticalStyle = config('vAlign', (props) => {
  if (props.direction === 'column') {
    return {
      top: {
        justifyContent: 'flex-start'
      },
      middle: {
        justifyContent: 'center'
      },
      bottom: {
        justifyContent: 'flex-end'
      }
    }
  } else {
    return {
      top: {
        alignItems: 'flex-start'
      },
      middle: {
        alignItems: 'center'
      },
      bottom: {
        alignItems: 'flex-end'
      }
    }
  }
})

// flex gap 처리
const useGapStyle = config(
  'space',
  makeStyleConst(GridSize, {
    styleKey: 'gap'
  })
)

const useDirectionStyle = config('direction', {
  column: {
    flexDirection: 'column'
  },
  row: {
    flexDirection: 'row'
  }
})

const defaultStyle: CSSObject = {
  display: 'flex'
}

const BoxStyled = styled.div<BoxProps>((props) => ({
  ...defaultStyle,
  ...useWidthStyle(props),
  ...useHeightStyle(props),
  ...useHorizontalStyle(props),
  ...useVerticalStyle(props),
  ...useGapStyle(props),
  ...useDirectionStyle(props),
  ...usePaddingTopStyle(props),
  ...usePaddingXStyle(props)
}))

export default BoxStyled
