import { InterviewCard } from '@/components/Oraganisms/Bodys/InterviewCard'
import BannersSlide from '@/components/Oraganisms/Headers/BannersSlide'
import type {
  interviewCardInfo,
  interviewerBannersInfo
} from '@/types/interview'

type MainPageType = {
  interview: Array<interviewCardInfo>
  banners: interviewerBannersInfo
}

export function MainPage({ interview, banners }: MainPageType) {
  return (
    <>
      <BannersSlide banners={banners} />
      {interview.map((card) => (
        <InterviewCard key={card.id} interview={card} />
      ))}
    </>
  )
}
