import { differenceInDays } from 'date-fns'
import { useMemo } from 'react'
import { FiUser, FiUserCheck } from 'react-icons/fi'

import ProgressBar from '@/components/Atoms/ProgressBar'
import RecruitDate from '@/components/Oraganisms/Bodys/RecruitDate'
import { calculatePercent } from '@/core/utils/date'
import type { interviewCardInfo } from '@/types/interview'

import {
  AllApplicant,
  ApplicantCount,
  ApplicantWrap,
  BottomDateWrap,
  CardContainer,
  CardTitleWrap,
  CheckApplicant,
  MainContainer,
  NewApplicant,
  ProgressWrap
} from './InterviewCard.style'

type InterviewCardProps = {
  interview: interviewCardInfo
}

export function InterviewCard({ interview }: InterviewCardProps) {
  const differenceInDay = useMemo<number>(
    () =>
      interview.endDate ? differenceInDays(interview.endDate, new Date()) : 0,
    [interview.endDate]
  )
  const percent = useMemo<number>(
    () =>
      interview.endDate && interview.startDate
        ? calculatePercent(interview.startDate, interview.endDate)
        : 0,
    [interview.startDate, interview.endDate]
  )

  return (
    <MainContainer>
      <CardContainer
        width="full"
        height="full"
        direction="column"
        hAlign="center"
        vAlign="middle"
      >
        <CardTitleWrap>{interview.title}</CardTitleWrap>
        <ApplicantWrap width="full">
          <AllApplicant vAlign="middle">
            <FiUser />
            <ApplicantCount>{interview.allApplicant}</ApplicantCount>
            <NewApplicant>N</NewApplicant>
          </AllApplicant>
          <CheckApplicant vAlign="middle">
            <FiUserCheck />
            <ApplicantCount>{interview.checkApplicant}</ApplicantCount>
          </CheckApplicant>
        </ApplicantWrap>
        <BottomDateWrap width="full" direction="column">
          <RecruitDate
            recruiting={interview.recruiting}
            days={differenceInDay}
          />
          <ProgressWrap>
            <ProgressBar
              maxNumber="100"
              valueNumber={percent}
              width="full"
              height="md"
            />
          </ProgressWrap>
        </BottomDateWrap>
      </CardContainer>
    </MainContainer>
  )
}
