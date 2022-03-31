import { MainPage } from '@/components/Templetes/MainPage'
import type { interviewCardInfo } from '@/types/interview'

const makingInterview: Array<interviewCardInfo> = [
  {
    id: 3,
    title: '2022 카카오 1분기 1차 면접',
    allApplicant: 0,
    checkApplicant: 0,
    recruiting: false
  },
  {
    id: 1,
    title: '2022 카카오 1분기 2차 면접',
    allApplicant: 0,
    checkApplicant: 0,
    recruiting: false
  },
  {
    id: 3,
    title: '2022 카카오 1분기 3차 면접',
    allApplicant: 0,
    checkApplicant: 0,
    recruiting: false
  }
]

const interview: Array<interviewCardInfo> = [
  {
    id: 1,
    title: '2022 카카오 1분기 2차 면접',
    allApplicant: 120,
    checkApplicant: 65,
    recruiting: true,
    startDate: new Date('2022-02-02'),
    endDate: new Date('2022-04-22')
  },
  {
    id: 2,
    title: '2022 감자 1분기 2차 면접',
    allApplicant: 120,
    checkApplicant: 65,
    recruiting: true,
    startDate: new Date('2022-03-01'),
    endDate: new Date('2022-05-04')
  },
  {
    id: 3,
    title: '2022 Ham 동아리 면접',
    allApplicant: 0,
    checkApplicant: 0,
    recruiting: false,
    startDate: new Date('2022-04-15'),
    endDate: new Date('2022-05-04')
  }
]
export default function Main() {
  return <MainPage makingInterview={makingInterview} interview={interview} />
}
