import { interviewCardInfo } from '@/../pages/Main'
import { InterviewCard } from '@/components/Oraganisms/Bodys/InterviewCard'

type MainPageType = {
  interview: Array<interviewCardInfo>
}

export function MainPage({ interview }: MainPageType) {
  return (
    <>
      {interview.map((card, index) => (
        <InterviewCard key={index} interview={card} />
      ))}
    </>
  )
}
