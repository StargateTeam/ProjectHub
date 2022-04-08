/* eslint no-use-before-define: 0 */ // --> OFF
// @ts-ignore
type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}${'' extends P ? '' : '.'}${P}`
    : never
  : never

export declare type ResponsiveValue<T> =
  | T
  | null
  | undefined
  | Array<T | null>
  | {
      [key in string | number]?: T
    }

export type Leaves<T> = T extends object
  ? { [K in keyof T]-?: Join<K, Leaves<T[K]>> }[keyof T]
  : ''
