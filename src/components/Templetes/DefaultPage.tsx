import Box from '../Atoms/Box'
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
      <Box bgColor="red.700" h="506px" w={'300px'}></Box>
      <Input bgColor="black" />
    </div>
  )
}

export default DefaultPage
