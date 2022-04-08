import { InterviewCard } from '@/components/Oraganisms/Bodys/InterviewCard'
import type { interviewCardInfo } from '@/types/interview'

type MainPageType = {
  interview: Array<interviewCardInfo>
}

export function MainPage({ interview }: MainPageType) {
  return (
    <>
      {interview.map((card) => (
        <InterviewCard key={card.id} interview={card} />
      ))}
    </>
  )
}
