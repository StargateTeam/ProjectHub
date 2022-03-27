import Input from '../Atoms/Input'
import Text from '../Atoms/Text'

type Props = {
  onDispatchButtonHandler: () => void
}

const DefaultPage = ({ onDispatchButtonHandler }: Props) => {
  return (
    <div>
      <button onClick={onDispatchButtonHandler}>디스패치</button>

      <Text fontSize="45px" fontWeight="bold">
        테스트
      </Text>
      <Input bgColor="black" />
    </div>
  )
}

export default DefaultPage
