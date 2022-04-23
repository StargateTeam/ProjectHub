import JobInterviewList from '@/components/Oraganisms/Bodys/JobInterviewList'
import MakingInterviewList from '@/components/Oraganisms/Bodys/MakingInterviewList'
import type { interviewCardInfo } from '@/types/interview'

type MainPageType = {
  interview: Array<interviewCardInfo>
  makingInterview: Array<interviewCardInfo>
}

export function MainPage({ interview, makingInterview }: MainPageType) {
  return (
    <>
      <MakingInterviewList makingInterview={makingInterview} />
      <JobInterviewList interview={interview} />
    </>
  )
}
