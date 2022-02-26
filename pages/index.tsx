import type { NextPage } from 'next'
import { useDispatch } from 'react-redux'

import DefaultPage from '@/components/Templetes/DefaultPage'

import { increase } from '../src/lib/store/@test/addAnything'

// 1. 버튼을 만들거야
// 2. 해당 버튼에 디스패치 핸들러를 넣을거야
// 3. 디스패치 => store 값을 넣을거야.
const Home: NextPage = () => {
  const dispatch = useDispatch()

  const dispatchHandler = () => {
    dispatch(increase())
  }

  return <DefaultPage onDispatchButtonHandler={dispatchHandler} />
}

export default Home
