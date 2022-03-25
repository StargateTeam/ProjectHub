import { useContext } from 'react'

import { Loading, LoadingContext } from '@/contexts/Loading'

export default function TestPage() {
  const loading = useContext(LoadingContext)
  console.log(loading)

  return (
    <div>
      {loading && Loading()}
      TestPage
    </div>
  )
}
