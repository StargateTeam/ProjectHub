import { useContext } from 'react'

import { LoadingContext } from '@/contexts/Loading'
import { Loading } from '@/contexts/Loading'

export default function TestPage() {
  const loading = useContext(LoadingContext)
  console.log(loading)

  return (
    <div>
      {!loading && Loading()}
      TestPage
    </div>
  )
}
