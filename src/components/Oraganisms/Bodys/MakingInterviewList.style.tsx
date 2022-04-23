import styled from 'styled-components'

import Box from '@/components/Atoms/Box'
import Text from '@/components/Atoms/Text'

const ListtWrap = styled(Box)`
  margin-top: 152px;
  padding: 0 64px;
`

const HeaderTitle = styled(Text)`
  margin-left: 16px;
`

const InterviewCardWrap = styled(Box)`
  margin-top: 24px;
  flex-wrap: wrap;
`

export { HeaderTitle, InterviewCardWrap, ListtWrap }
