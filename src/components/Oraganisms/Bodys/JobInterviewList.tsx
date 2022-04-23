import React from 'react'
import { AiOutlineSetting } from 'react-icons/ai'
import { BsSortDownAlt } from 'react-icons/bs'
import { MdAddCircleOutline } from 'react-icons/md'

import { InterviewCard } from '@/components/Oraganisms/Bodys/InterviewCard'
import type { interviewCardInfo } from '@/types/interview'

import {
  HeaderTitle,
  IconButton,
  IconButtonWrap,
  InterviewCardWrap,
  ListHeaderWrap,
  ListtWrap
} from './JobInterviewList.style'

type JobInterviewListType = {
  interview: Array<interviewCardInfo>
}

function JobInterviewList({ interview }: JobInterviewListType) {
  return (
    <ListtWrap direction="column" width="full">
      <ListHeaderWrap>
        <HeaderTitle fontSize="24px" fontWeight="bold">
          면접리스트
        </HeaderTitle>
        <IconButtonWrap>
          <IconButton>
            <MdAddCircleOutline size={32} color="skyblue" />
          </IconButton>
          <IconButton>
            <BsSortDownAlt size={32} />
          </IconButton>
          <IconButton>
            <AiOutlineSetting size={32} />
          </IconButton>
        </IconButtonWrap>
      </ListHeaderWrap>
      <InterviewCardWrap>
        {interview.map((card) => (
          <InterviewCard key={card.id} interview={card} />
        ))}
      </InterviewCardWrap>
    </ListtWrap>
  )
}

export default JobInterviewList
