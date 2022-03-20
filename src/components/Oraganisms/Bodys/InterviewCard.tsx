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
      <CardContainer>
        <CardTitleWrap>{interview.title}</CardTitleWrap>
        <ApplicantWrap>
          <AllApplicant>
            <FiUser />
            <ApplicantCount>{interview.allApplicant}</ApplicantCount>
            <NewApplicant>N</NewApplicant>
          </AllApplicant>
          <CheckApplicant>
            <FiUserCheck />
            <ApplicantCount>{interview.checkApplicant}</ApplicantCount>
          </CheckApplicant>
        </ApplicantWrap>
        <BottomDateWrap>
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
