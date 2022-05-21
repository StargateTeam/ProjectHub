import React from 'react'

import type { IntervieweeInfo } from '@/types/interview'

import {
  CardWrap,
  CheckButton,
  ContentText,
  ContentWrap
} from './CheckIntervieweeCard.style'
export default function CheckIntervieweeCard({
  number,
  email,
  interviewDate,
  scoringStatus
}: IntervieweeInfo) {
  return (
    <CardWrap>
      <ContentWrap w="full" hAlign="center" my={'2xl'}>
        <ContentText fontSize="8" fontWeight="bold">
          No. {number}
        </ContentText>
        <ContentText fontSize="8" fontWeight="bold">
          {scoringStatus}
        </ContentText>
      </ContentWrap>

      <ContentWrap w="full" hAlign="center">
        <ContentWrap w="full" hAlign="center" direction="column">
          <ContentText fontSize="2xl" fontWeight="bold">
            이메일
          </ContentText>
          <ContentText fontSize="2xl" fontWeight="bold">
            면접일
          </ContentText>
        </ContentWrap>
        <ContentWrap w="full" hAlign="center" direction="column">
          <ContentText fontSize="2xl">{email}</ContentText>
          <ContentText fontSize="2xl">{interviewDate}</ContentText>
        </ContentWrap>
      </ContentWrap>

      <ContentWrap w="full" hAlign="center" my={'2xl'}>
        <CheckButton>합격</CheckButton>
        <CheckButton>불합격</CheckButton>
      </ContentWrap>
    </CardWrap>
  )
}
