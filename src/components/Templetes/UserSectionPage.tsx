import Box from '@/components/Atoms/Box'
import { EmailBox } from '@/components/Oraganisms/UserSection/EmailBox'
import { InterviewInfo } from '@/components/Oraganisms/UserSection/InterviewInfo'
import { StartButton } from '@/components/Oraganisms/UserSection/StartButton'
import { interviewCardInfo } from '@/types/interview'

import { MicTest } from '../Oraganisms/UserSection/MicTest'

type UserSectionPageType = {
  interview: interviewCardInfo
}

export function UserSectionPage(props: UserSectionPageType) {
  return (
    <Box hAlign="center" direction="column">
      <Box
        w="full"
        hAlign="center"
        direction="column"
        style={{ margin: '100px 0px' }}
      >
        <InterviewInfo interview={props.interview} />
      </Box>
      <EmailBox />
      <Box
        w="full"
        hAlign="center"
        direction="column"
        style={{ margin: '40px 0px 20px 0px' }}
      >
        <StartButton>면접 시작하기</StartButton>
      </Box>
      <MicTest />
    </Box>
  )
}
