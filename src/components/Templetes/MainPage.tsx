import JobInterviewList from '@/components/Oraganisms/Bodys/JobInterviewList'
import MakingInterviewList from '@/components/Oraganisms/Bodys/MakingInterviewList'
import BannersSlide from '@/components/Oraganisms/Headers/BannersSlide'
import type {
  interviewCardInfo,
  interviewerBannersInfo
} from '@/types/interview'

type MainPageType = {
  interview: Array<interviewCardInfo>
  makingInterview: Array<interviewCardInfo>

  banners: interviewerBannersInfo
}

export function MainPage({
  interview,
  makingInterview,
  banners
}: MainPageType) {
  return (
    <>
      <BannersSlide banners={banners} />
      <MakingInterviewList makingInterview={makingInterview} />
      <JobInterviewList interview={interview} />
    </>
  )
}
