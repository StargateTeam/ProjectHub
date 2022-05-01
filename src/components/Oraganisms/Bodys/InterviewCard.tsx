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
        w="full"
        h="full"
        direction="column"
        hAlign="center"
        vAlign="middle"
      >
        <CardTitleWrap fontWeight="bold" fontSize="2xl">
          {interview.title}
        </CardTitleWrap>
        <ApplicantWrap w="full">
          <AllApplicant vAlign="middle">
            <FiUser />
            <ApplicantCount>{interview.allApplicant}</ApplicantCount>
            <NewApplicant fontSize="10px" fontWeight="bold" color="white">
              N
            </NewApplicant>
          </AllApplicant>
          <CheckApplicant vAlign="middle">
            <FiUserCheck />
            <ApplicantCount>{interview.checkApplicant}</ApplicantCount>
          </CheckApplicant>
        </ApplicantWrap>
        <BottomDateWrap w="full" direction="column">
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
