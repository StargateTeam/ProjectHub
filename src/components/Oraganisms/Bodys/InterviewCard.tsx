import { useMemo } from 'react'
import { FiUser, FiUserCheck } from 'react-icons/fi'

import ProgressBar from '@/components/Atoms/ProgressBar'
import RecruitDate from '@/components/Oraganisms/Bodys/RecruitDate'
import { calculateDays, calculatePercent } from '@/core/utils/interviewUtils'
import { interviewCardInfo } from '@/types/interview'

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
  const days = useMemo<number>(
    () => calculateDays(interview.endDate, new Date()),
    [interview.endDate]
  )
  const percent = useMemo<number>(
    () => calculatePercent(interview.startDate, interview.endDate, new Date()),
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
          <RecruitDate recruiting={interview.recruiting} days={days} />
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
