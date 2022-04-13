import { useContext } from 'react'

import { LoadingContextProvider } from '@/contexts/LoadingContext'

export function useOnLoading() {
  const { onLoading } = useContext(LoadingContextProvider)
  return onLoading()
}
export function useOffLoading() {
  const { offLoading } = useContext(LoadingContextProvider)

  return offLoading
}
