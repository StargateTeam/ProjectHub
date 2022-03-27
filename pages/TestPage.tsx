import { useContext } from 'react'

import { LoadingContextProvider } from '@/contexts/LoadingContext'

export default function TestPage() {
  // const { setOffLoading, setOnLoading } = useLoading()
  const { useOnLoading, useOffLoading } = useContext(LoadingContextProvider)

  return (
    <>
      <div>hello</div>
      <button onClick={useOnLoading}>on</button>
      <button onClick={useOffLoading}>off</button>
    </>
  )
}
