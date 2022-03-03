import { NextComponentType } from 'next'

export type Page<P = Record<string, unknown>, IP = P> = NextComponentType<
  any,
  IP,
  P
> & {
  header?: (arg0: any) => JSX.Element
  guard?: (arg0: any) => JSX.Element
  layout?: (arg0: any) => JSX.Element
  disableFooter?: boolean
  title?: string
  PrevComponent?: React.ReactElement
}
