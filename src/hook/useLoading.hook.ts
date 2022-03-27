import { useCallback, useContext, useState } from 'react'

import { LoadingContextProvider } from '@/contexts/LoadingContext'

export function useLoading() {
  const red = useContext(LoadingContextProvider)
  const setOnLoading = useCallback(() => {
    console.log('useLoaindg')
    // useOnLoading
  }, [])

  const setOffLoading = useCallback(() => {
    // useOffLoading
  }, [])
  // const [isLoading, setIsLoading] = useState(false)

  // const useOnLoading = useCallback(() => {
  //   useOnLoading()
  // }, [])

  // const useOffLoading = useCallback(() => {
  //   useOffLoading()
  // }, [])

  return { setOnLoading, setOffLoading }
}
