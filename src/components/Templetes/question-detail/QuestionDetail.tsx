import Box from '@/components/Atoms/Box'
import Text from '@/components/Atoms/Text'

const QuestionDetailTemplete = () => {
  return (
    <Box style={{ backgroundColor: '#E4E4E4' }} py="4rem" h="full">
      <Box
        css={{
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      >
        <Box
          w="8rem"
          css={{ backgroundColor: 'white' }}
          rounded="lg"
          mr="md"
        ></Box>
        <Box w="60rem" h="full" direction="column" space="lg">
          <Box
            rounded="lg"
            w="full"
            h="20rem"
            px="4rem"
            py="1rem"
            direction="column"
            css={{
              backgroundColor: 'white'
            }}
          >
            <Box vAlign="bottom">
              <Text fontWeight="bold" fontSize="8">
                메모
              </Text>
              <Text
                fontSize="14px"
                color="#666666"
                css={{ marginLeft: '1rem' }}
              >
                메모는 면접자에게 표시되지 않습니다.
              </Text>
            </Box>
            <Box pt="2rem">
              <Text>테스트 테스트 아아아!</Text>
            </Box>
          </Box>
          <Box
            rounded="lg"
            w="full"
            h="35rem"
            css={{
              backgroundColor: 'white'
            }}
          ></Box>
        </Box>
      </Box>
    </Box>
  )
}

export default QuestionDetailTemplete
