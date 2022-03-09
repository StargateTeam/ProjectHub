import { FiUser, FiUserCheck } from 'react-icons/fi'

import { interviewCardInfo } from '@/../pages/Main'
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
  NewApplicant,
  Progress
} from './InterviewCard.style'

type InterviewCardProps = {
  interview: interviewCardInfo
}

export function InterviewCard({ interview }: InterviewCardProps) {
  const days =
    interview.startDate !== undefined && interview.endDate !== undefined
      ? Math.round((+new Date() - +interview.endDate) / -(24 * 60 * 60 * 1000))
      : 0
  const percent =
    interview.startDate !== undefined && interview.endDate !== undefined
      ? Math.round(
          ((+interview.startDate - +new Date()) /
            (+interview.startDate - +interview.endDate)) *
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
          {percent > 100 ? (
            <Progress max="100" value="100" />
          ) : (
            <Progress max="100" value={percent} />
          )}
        </BottomDateWrap>
      </CardContainer>
    </MainContainer>
  )
}
