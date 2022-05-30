import React from 'react'

import InterviewOverPage from '@/components/Templetes/InterviewOverPage'
import type { overInterviewInfo } from '@/types/interview'

export default function InterviewOver() {
  const endInterview: overInterviewInfo = {
    title: '기타 동아리 2기 면접',
    time: new Date('2022-05-28T12:32:12'),
    intervieweeEmail: 'tamd5971@naver.com'
  }
  return (
    <InterviewOverPage
      title={endInterview.title}
      time={endInterview.time}
      intervieweeEmail={endInterview.intervieweeEmail}
    />
  )
}
