import { FiUser, FiUserCheck } from 'react-icons/fi'
import styled from 'styled-components'

import { interviewCardInfo } from '@/../pages/Main'

type ProgressProps = {
  percent: number
}

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
          {interview.recruiting ? (
            <DateTextWrap>
              <DateText> </DateText>
              {days < 0 ? (
                <DateText> 면접 종료</DateText>
              ) : (
                <DateText>{days}일 남음</DateText>
              )}
            </DateTextWrap>
          ) : (
            <DateTextWrap>
              <DateText> </DateText>
              <DateText>0</DateText>
            </DateTextWrap>
          )}
          <ProgressBarWrap>
            <Background />
            {percent > 100 ? (
              <Progress percent={100} />
            ) : (
              <Progress percent={percent} />
            )}
          </ProgressBarWrap>
        </BottomDateWrap>
      </CardContainer>
    </MainContainer>
  )
}

const MainContainer = styled.div``

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;
  align-items: center;
  width: 332px;
  height: 287px;
  background: #ffffff;
  border: 1px solid #666666;
  box-sizing: border-box;
`

const CardTitleWrap = styled.div`
  width: 305px;
  height: 150px;
  background: #c5fbff;
  border: 1px solid #666666;
  box-sizing: border-box;
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
`

const ApplicantWrap = styled.div`
  margin: 8px 16px;
  width: -webkit-fill-available;
  display: flex;
  justify-content: space-between;
`

const AllApplicant = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
`

const NewApplicant = styled.div`
  background-color: #f04040;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  color: white;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 12px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-left: 4px;
`

const CheckApplicant = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  color: #6dcd01;
`

const ApplicantCount = styled.div`
  margin-left: 8px;
`

const BottomDateWrap = styled.div`
  width: -webkit-fill-available;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
`

const DateTextWrap = styled.div`
  margin: 0 16px;
  width: -webkit-fill-available;
  display: flex;
  justify-content: space-between;
`

const DateText = styled.div`
  font-weight: 700;
  color: #666666;
`

const ProgressBarWrap = styled.div`
  height: 5px;
  margin: 4px 16px 8px 16px;
  width: -webkit-fill-available;
  position: relative;
`

const BaseBox = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 3px;
  transition: width 10s ease-in-out;
`

const Background = styled(BaseBox)`
  background: grey;
  width: 100%;
`

const Progress = styled(BaseBox)`
  background: blue;
  width: ${({ percent }: ProgressProps) => percent}%;
`
