import { differenceInDays } from 'date-fns'
import { useMemo } from 'react'

import Box from '@/components/Atoms/Box'
import ProgressBar from '@/components/Atoms/ProgressBar'
import Text from '@/components/Atoms/Text'
import { calculatePercent } from '@/core/utils/date'
import { interviewCardInfo } from '@/types/interview'

import RecruitDate from '../Bodys/RecruitDate'
import * as S from './InterviewInfo.style'

type InterviewInfoType = {
  interview: interviewCardInfo
}
export const InterviewInfo = ({ interview }: InterviewInfoType) => {
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

  const handleDateView = (date: Date | undefined) => {
    if (!date) return ''
    return (
      date.getFullYear() +
      '-' +
      String(date.getMonth() + 1).padStart(2, '0') +
      '-' +
      String(date.getDate()).padStart(2, '0') +
      ' ' +
      String(date.getHours()).padStart(2, '0') +
      ':' +
      String(date.getMinutes()).padStart(2, '0')
    )
  }

  const formattedStartDate = useMemo(
    () => handleDateView(interview.startDate),
    [interview]
  )

  const formattedEndDate = useMemo(
    () => handleDateView(interview.endDate),
    [interview]
  )
  return (
    <S.Container w="half">
      <S.TitleCard w="half" h="full" hAlign="center" vAlign="middle">
        <Text fontSize="2xl" color="white" fontWeight="bold">
          {interview.title}
        </Text>
      </S.TitleCard>
      <S.InfoWrapper w="half" direction="column">
        <Box w="full" direction="column" h="half">
          <RecruitDate
            recruiting={interview.recruiting}
            days={differenceInDay}
          />
          <S.ProgressWrap>
            <ProgressBar
              maxNumber="100"
              valueNumber={percent}
              width="full"
              height="md"
            />
          </S.ProgressWrap>
        </Box>

        <Box
          w="full"
          h="half"
          direction="column"
          hAlign="right"
          vAlign="bottom"
        >
          <S.DateWrapper>
            <S.DateTitleWrapper>
              <Text fontSize="2xl" color="gray">
                시작일
              </Text>
            </S.DateTitleWrapper>
            <Box>
              <Text fontSize="2xl" color="black">
                {formattedStartDate}
              </Text>
            </Box>
          </S.DateWrapper>
          <S.DateWrapper>
            <S.DateTitleWrapper>
              <Text fontSize="2xl" color="gray">
                종료일
              </Text>
            </S.DateTitleWrapper>
            <Box>
              <Text fontSize="2xl" color="black">
                {formattedEndDate}
              </Text>
            </Box>
          </S.DateWrapper>
        </Box>
      </S.InfoWrapper>
    </S.Container>
  )
}
