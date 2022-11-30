import { useContext } from 'react'

import { LoadingContextProvider } from '@/contexts/LoadingContext'

export function useLoading() {
  const { onLoading } = useContext(LoadingContextProvider)
  const { offLoading } = useContext(LoadingContextProvider)
  return { onLoading, offLoading }
}
