import { createContext } from 'react'

import LoadingScreen from './LoadingScreen'

export const loadingInitalState = true

export const LoadingContext = createContext<boolean>(loadingInitalState)

export function Loading() {
  return LoadingScreen()
}
