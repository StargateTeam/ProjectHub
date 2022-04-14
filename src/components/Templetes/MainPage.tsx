import { InterviewCard } from '@/components/Oraganisms/Bodys/InterviewCard'
import BannersSlide from '@/components/Oraganisms/Headers/BannersSlide'
import type { interviewCardInfo } from '@/types/interview'

type MainPageType = {
  interview: Array<interviewCardInfo>
}

export function MainPage({ interview }: MainPageType) {
  return (
    <>
      <BannersSlide />
      {interview.map((card) => (
        <InterviewCard key={card.id} interview={card} />
      ))}
    </>
  )
}
