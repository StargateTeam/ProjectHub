import Input from '../Atoms/Input'

type Props = {
  onDispatchButtonHandler: () => void
}

const DefaultPage = ({ onDispatchButtonHandler }: Props) => {
  return (
    <div>
      <button onClick={onDispatchButtonHandler}>디스패치</button>

      <Input bgColor="black" />
    </div>
  )
}

export default DefaultPage
