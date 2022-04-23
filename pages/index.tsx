import { useDispatch } from 'react-redux'

//import DefaultHeader from '@/components/Oraganisms/Headers/DefaultHeader'
import DefaultPage from '@/components/Templetes/DefaultPage'
import { Page } from '@/types/context'

import { increase } from '../src/lib/store/@test/addAnything'

// 1. 버튼을 만들거야
// 2. 해당 버튼에 디스패치 핸들러를 넣을거야
// 3. 디스패치 => store 값을 넣을거야.
const Home: Page = () => {
  const dispatch = useDispatch()

  const dispatchHandler = () => {
    dispatch(increase())
  }

  return <DefaultPage onDispatchButtonHandler={dispatchHandler} />
}

// Home.header = DefaultHeader

export default Home
