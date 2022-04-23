import '../styles/globals.css'

import type { AppProps } from 'next/app'
import React from 'react'

import LoadingContext from '@/contexts/LoadingContext'

import { wrapper } from '../src/lib/store'

function MyApp({ Component, pageProps }: AppProps) {
  const Header = (Component as any).header || React.Fragment

  return (
    <LoadingContext>
      <Header />
      <Component {...pageProps} />
    </LoadingContext>
  )
}

export default wrapper.withRedux(MyApp)
