import { interviewCardInfo } from '@/../pages/Main'
import { InterviewCard } from '@/components/Oraganisms/Bodys/InterviewCard'

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
