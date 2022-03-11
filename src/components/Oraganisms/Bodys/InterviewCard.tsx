import { differenceInDays, differenceInMinutes } from 'date-fns'
import { FiUser, FiUserCheck } from 'react-icons/fi'

import { interviewCardInfo } from '@/../pages/Main'
import ProgressBar from '@/components/Atoms/ProgressBar'
import RecruitDate from '@/components/Oraganisms/Bodys/RecruitDate'

import {
  AllApplicant,
  ApplicantCount,
  ApplicantWrap,
  BottomDateWrap,
  CardContainer,
  CardTitleWrap,
  CheckApplicant,
  MainContainer,
  NewApplicant
} from './InterviewCard.style'

type InterviewCardProps = {
  interview: interviewCardInfo
}

export function InterviewCard({ interview }: InterviewCardProps) {
  const days =
    interview.startDate && interview.endDate
      ? differenceInDays(interview.endDate, new Date())
      : 0
  const percent =
    interview.startDate && interview.endDate !== undefined
      ? Math.round(
          (differenceInMinutes(interview.startDate, new Date()) /
            differenceInMinutes(interview.startDate, interview.endDate)) *
            100
        )
      : 0
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
          <ProgressBar
            maxNumber="100"
            valueNumber={percent}
            width="fit"
            height="md"
            marginLeftRight="lg"
            marginTopBottom="md"
          />
        </BottomDateWrap>
      </CardContainer>
    </MainContainer>
  )
}
