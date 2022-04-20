import '../styles/globals.css'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'

import type { AppProps } from 'next/app'
import React from 'react'

import { wrapper } from '../src/lib/store'

function MyApp({ Component, pageProps }: AppProps) {
  const Header = (Component as any).header || React.Fragment

  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default wrapper.withRedux(MyApp)
