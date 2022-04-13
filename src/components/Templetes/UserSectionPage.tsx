import Box from '@/components/Atoms/Box'
import { InterviewInfo } from '@/components/Oraganisms/UserSection/InterviewInfo'
import { interviewCardInfo } from '@/types/interview'

type UserSectionPageType = {
  interview: interviewCardInfo
}

export function UserSectionPage(props: UserSectionPageType) {
  return (
    <Box hAlign="center">
      <InterviewInfo interview={props.interview} />
    </Box>
  )
}
