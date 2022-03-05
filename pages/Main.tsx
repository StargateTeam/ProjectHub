import { MainPage } from '@/components/Templetes/MainPage'

export interface interviewCardInfo {
  title: string
  allApplicant: number
  checkApplicant: number
  recruiting: boolean
  startDate?: Date
  endDate?: Date
}

const interview: Array<interviewCardInfo> = [
  {
    title: '2022 카카오 1분기 2차 면접',
    allApplicant: 120,
    checkApplicant: 65,
    recruiting: true,
    startDate: new Date('2022-02-02'),
    endDate: new Date('2022-03-07')
  },
  {
    title: '2022 감자 1분기 2차 면접',
    allApplicant: 120,
    checkApplicant: 65,
    recruiting: true,
    startDate: new Date('2022-03-01'),
    endDate: new Date('2022-03-04')
  },
  {
    title: '2022 Ham 동아리 면접',
    allApplicant: 0,
    checkApplicant: 0,
    recruiting: false
  }
]

export default function Main() {
  return <MainPage interview={interview} />
}
