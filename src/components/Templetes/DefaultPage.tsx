import Input from '../Atoms/Input'
import DefaultHeader from '../Oraganisms/Headers/DefaultHeader'

type Props = {
  onDispatchButtonHandler: () => void
}

const DefaultPage = ({ onDispatchButtonHandler }: Props) => {
  return (
    <div>
      <DefaultHeader />
      <button onClick={onDispatchButtonHandler}>디스패치</button>

      <Input bgColor="black" />
    </div>
  )
}

export default DefaultPage
