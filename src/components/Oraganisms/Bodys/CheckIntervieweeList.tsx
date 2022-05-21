import React, { useRef, useState } from 'react'

import Box from '@/components/Atoms/Box'

import CheckIntervieweeCard from './CheckIntervieweeCard'
import IntervieweeTable from './IntervieweeTable'

export default function CheckIntervieweeList() {
  const [selectCheck, setSelectCheck] = useState(0)
  const columns = React.useMemo(
    () => [
      {
        Header: '번호',
        accessor: 'number'
      },
      {
        Header: '이메일',
        accessor: 'email'
      },
      {
        Header: '면접 날짜',
        accessor: 'interviewDate'
      },
      {
        Header: '채점 현황',
        accessor: 'scoringStatus'
      }
    ],
    []
  )
  const data = useRef([
    {
      number: 1,
      email: 'tamd5971@naver.com',
      interviewDate: '2022-05-20 15:31',
      scoringStatus: '미채점'
    },
    {
      number: 2,
      email: 'tamd5971@naver.com',
      interviewDate: '2022-05-20 15:31',
      scoringStatus: '합격'
    },
    {
      number: 3,
      email: 'tamd5971@naver.com',
      interviewDate: '2022-05-20 15:31',
      scoringStatus: '불합격'
    },
    {
      number: 4,
      email: 'tamd5971@naver.com',
      interviewDate: '2022-05-20 15:31',
      scoringStatus: '미채점'
    },
    {
      number: 5,
      email: 'tamd5971@naver.com',
      interviewDate: '2022-05-20 15:31',
      scoringStatus: '미채점'
    },
    {
      number: 6,
      email: 'tamd5971@naver.com',
      interviewDate: '2022-05-20 15:31',
      scoringStatus: '미채점'
    },
    {
      number: 7,
      email: 'tamd5971@naver.com',
      interviewDate: '2022-05-20 15:31',
      scoringStatus: '미채점'
    },
    {
      number: 8,
      email: 'tamd5971@naver.com',
      interviewDate: '2022-05-20 15:31',
      scoringStatus: '미채점'
    },
    {
      number: 9,
      email: 'tamd5971@naver.com',
      interviewDate: '2022-05-20 15:31',
      scoringStatus: '미채점'
    },
    {
      number: 10,
      email: 'tamd5971@naver.com',
      interviewDate: '2022-05-20 15:31',
      scoringStatus: '미채점'
    },
    {
      number: 11,
      email: 'tamd5971@naver.com',
      interviewDate: '2022-05-20 15:31',
      scoringStatus: '미채점'
    },
    {
      number: 12,
      email: 'tamd5971@naver.com',
      interviewDate: '2022-05-20 15:31',
      scoringStatus: '미채점'
    },
    {
      number: 13,
      email: 'tamd5971@naver.com',
      interviewDate: '2022-05-20 15:31',
      scoringStatus: '미채점'
    },
    {
      number: 14,
      email: 'tamd5971@naver.com',
      interviewDate: '2022-05-20 15:31',
      scoringStatus: '미채점'
    },
    {
      number: 15,
      email: 'tamd5971@naver.com',
      interviewDate: '2022-05-20 15:31',
      scoringStatus: '미채점'
    },
    {
      number: 16,
      email: 'tamd5971@naver.com',
      interviewDate: '2022-05-20 15:31',
      scoringStatus: '미채점'
    },
    {
      number: 17,
      email: 'tamd5971@naver.com',
      interviewDate: '2022-05-20 15:31',
      scoringStatus: '미채점'
    },
    {
      number: 18,
      email: 'tamd5971@naver.com',
      interviewDate: '2022-05-20 15:31',
      scoringStatus: '미채점'
    },
    {
      number: 19,
      email: 'tamd5971@naver.com',
      interviewDate: '2022-05-20 15:31',
      scoringStatus: '미채점'
    }
  ])

  const onClickInterviewee = (id) => {
    setSelectCheck(id)
  }

  return (
    <Box>
      <IntervieweeTable
        columns={columns}
        data={data.current}
        onClickList={onClickInterviewee}
      />
      <CheckIntervieweeCard
        number={data.current[selectCheck].number}
        email={data.current[selectCheck].email}
        interviewDate={data.current[selectCheck].interviewDate}
        scoringStatus={data.current[selectCheck].scoringStatus}
      />
    </Box>
  )
}
