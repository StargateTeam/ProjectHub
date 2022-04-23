import styled from 'styled-components'

import Box from '@/components/Atoms/Box'
import Text from '@/components/Atoms/Text'

const ListtWrap = styled(Box)`
  margin-top: 152px;
  padding: 0 64px 64px;
`
const ListHeaderWrap = styled(Box)`
  margin: 0 16px;
  justify-content: space-between;
`

const HeaderTitle = styled(Text)``

const IconButtonWrap = styled(Box)``

const IconButton = styled.div`
  margin-right: 24px;
`

const InterviewCardWrap = styled(Box)`
  margin-top: 24px;
  flex-wrap: wrap;
`

export {
  HeaderTitle,
  IconButton,
  IconButtonWrap,
  InterviewCardWrap,
  ListHeaderWrap,
  ListtWrap
}
