import React, { createContext, useCallback, useState } from 'react'

import * as S from './Loading.style'

export const LoadingContextProvider = createContext({
  useOnLoading: () => {},
  useOffLoading: () => {}
})

export type LoadingContextType = { children: React.ReactNode }

const LoadingContext = ({ children }: LoadingContextType) => {
  const [isLoading, setIsLoading] = useState(false)
  const useOnLoading = useCallback(() => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 3000)
  }, [])

  const useOffLoading = useCallback(() => {
    setIsLoading(false)
  }, [])
  return (
    <LoadingContextProvider.Provider value={{ useOnLoading, useOffLoading }}>
      <S.Container isLoading={isLoading}>
        <S.Cover />
        <S.Loading />
      </S.Container>
      {children}
    </LoadingContextProvider.Provider>
  )
}
export default LoadingContext
