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

// 패딩(상하) 처리
const usePaddingYStyle = config(
  'py',
  makeStyleConst(GridSize, {
    factory: (styleUnit) => ({
      paddingTop: styleUnit,
      paddingBottom: styleUnit
    })
  })
)

// 마진(좌우) 처리
const useMarginXStyle = config(
  'mx',
  makeStyleConst(GridSize, {
    factory: (styleUnit) => ({
      marginLeft: styleUnit,
      marginRight: styleUnit
    })
  })
)

// 마진(좌) 처리
const useMarginLeftStyle = config(
  'ml',
  makeStyleConst(GridSize, {
    styleKey: 'margin-left'
  })
)

// 마진(우) 처리
const useMarginRightStyle = config(
  'mr',
  makeStyleConst(GridSize, {
    styleKey: 'margin-right'
  })
)

// 마진(상하) 처리
const useMarginYStyle = config(
  'my',
  makeStyleConst(GridSize, {
    factory: (styleUnit) => ({
      marginTop: styleUnit,
      marginBottom: styleUnit
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

// rounded 처리
const useRoundedStyle = config(
  'rounded',
  makeStyleConst(GridSize, {
    styleKey: 'border-radius'
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
  ...usePaddingXStyle(props),
  ...usePaddingYStyle(props),
  ...useMarginXStyle(props),
  ...useMarginYStyle(props),
  ...useRoundedStyle(props),
  ...useMarginLeftStyle(props),
  ...useMarginRightStyle(props)
}))

export default BoxStyled
