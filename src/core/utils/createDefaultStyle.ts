/* eslint-disable react-hooks/rules-of-hooks */
import { Theme } from '@emotion/react'
import { ElementType } from 'react'

import colors, { IColors } from '@/constants/styles/colorScheme'
import GridSize, { GridSizeType } from '@/constants/styles/gridSize'
import {
  colorExtractor,
  configureStyle,
  makeStyleConst
} from '@/core/utils/emotions'
import { ResponsiveValue } from '@/types/util'

export type defaultStyle = React.PropsWithChildren<{
  w?: ResponsiveValue<keyof GridSizeType | (string & {})>
  h?: ResponsiveValue<keyof GridSizeType | (string & {})>
  direction?: 'row' | 'column'
  hAlign?: 'left' | 'center' | 'right'
  vAlign?: 'top' | 'middle' | 'bottom'

  bgColor?: IColors
  space?: ResponsiveValue<keyof GridSizeType | (string & {})>
  pt?: ResponsiveValue<keyof GridSizeType | (string & {})>
  px?: ResponsiveValue<keyof GridSizeType | (string & {})>
  py?: ResponsiveValue<keyof GridSizeType | (string & {})>
  mx?: ResponsiveValue<keyof GridSizeType | (string & {})>
  my?: ResponsiveValue<keyof GridSizeType | (string & {})>
  ml?: ResponsiveValue<keyof GridSizeType | (string & {})>
  mr?: ResponsiveValue<keyof GridSizeType | (string & {})>
  rounded?: ResponsiveValue<
    'none' | 'small' | 'normal' | 'full' | (string & {})
  >
  className?: string
  style?: React.CSSProperties
}>

const createDefaultStyle = (props: {
  theme?: Theme | undefined
  as?: ElementType<any> | undefined
}) => {
  const config = configureStyle<any>()

  // 넓이 처리
  const useWidthStyle = config(
    'w',
    makeStyleConst(GridSize, {
      styleKey: 'width'
    })
  )

  // 높이 처리
  const useHeightStyle = config(
    'h',
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

  const useDirectionStyle = config('direction', {
    column: {
      flexDirection: 'column'
    },
    row: {
      flexDirection: 'row'
    }
  })

  const useBackgroundColorStyle = config(
    'bgColor',
    makeStyleConst(colorExtractor(colors), {
      factory: (styleUnit) => ({
        backgroundColor: styleUnit
      })
    })
  )

  return {
    ...useWidthStyle(props),
    ...useHeightStyle(props),
    ...useBackgroundColorStyle(props),
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
  }
}

export default createDefaultStyle
