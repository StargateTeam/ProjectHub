import { createContext } from 'react'

import LoadingScreen from './LoadingScreen'

export const loadingInitalState = false

export const LoadingContext = createContext<null | boolean>(loadingInitalState)

export function Loading() {
  return LoadingScreen()
}
