import { useLoading } from '@/hook/useLoading.hook'

export default function TestPage() {
  const loading = useLoading()
  return (
    <>
      <div>hello</div>
      <button onClick={loading.onLoading}>on</button>
      <button onClick={loading.offLoading}>off</button>
    </>
  )
}
