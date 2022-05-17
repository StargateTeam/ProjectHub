import { InterviewCard } from '@/components/Oraganisms/Bodys/InterviewCard'
import type { interviewCardInfo } from '@/types/interview'

import {
  HeaderTitle,
  InterviewCardWrap,
  ListtWrap
} from './MakingInterviewList.style'

type MakingInterviewListType = {
  makingInterview: Array<interviewCardInfo>
}

function MakingInterviewList({ makingInterview }: MakingInterviewListType) {
  return (
    <ListtWrap direction="column" w="full">
      <HeaderTitle fontSize="24px" fontWeight="bold">
        작성중인 면접 리스트
      </HeaderTitle>
      <InterviewCardWrap>
        {makingInterview.map((card) => (
          <InterviewCard key={card.id} interview={card} />
        ))}
      </InterviewCardWrap>
    </ListtWrap>
  )
}

export default MakingInterviewList
