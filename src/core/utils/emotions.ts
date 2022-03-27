import { CSSObject } from '@emotion/styled'

/**
 * @emotionUtility
 * 이모션 스타일링을 간편하게 하기 위해 제작한 유틸리티 함수입니다.
 */
export const configureStyle =
  <T = Record<string | number, Record<string, unknown>>>() =>
  <K extends keyof T>(
    styleKey: K,
    styleObj:
      | Partial<Record<T[K] & (string | number), CSSObject>>
      | ((props: T) => Partial<Record<T[K] & (string | number), CSSObject>>)
  ) =>
  (props: T) => {
    if (typeof styleObj === 'function') {
      return styleObj(props)[props[styleKey] as T[K] & any]
    } else {
      return (
        styleObj[props[styleKey] as T[K] & any] || {
          [styleKey]: props[styleKey]
        }
      )
    }
  }

export const makeStyleConst = (
  styleObj: Record<string, any>,
  {
    styleKey,
    factory
  }: {
    styleKey?: keyof CSSObject
    factory?: (unit: string) => CSSObject
  }
) => {
  const _clone = { ...styleObj }

  for (const keyName of Object.keys(_clone)) {
    if (factory) {
      _clone[keyName] = factory(_clone[keyName])
    }
    if (styleKey) {
      _clone[keyName] = {
        [styleKey]: _clone[keyName] as any
      } as CSSObject
    }
  }

  return _clone
}
