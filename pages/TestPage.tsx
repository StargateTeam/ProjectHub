import { useOffLoading, useOnLoading } from '@/hook/useLoading.hook'

export default function TestPage() {
  return (
    <>
      <div>hello</div>
      <button onClick={useOnLoading}>on</button>
      <button onClick={useOffLoading}>off</button>
    </>
  )
}
