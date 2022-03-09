import { MainPage } from '@/components/Templetes/MainPage'

/* type interviewCardInfo : 면접관인 유저가 만든 면접에 대한 정보 type
 * id: 각각의 인터뷰를 구분하며 db에 들어가는 내용과 동일한 key값(number)
 * title: 면접 제목(string)
 * allApplicant: 해당 면접에 대한 지원자의 수(number), 지원이 시작되지 않은 면접의 경우 0
 * checkApplicant:  면접관 측에서 체크한 지원자의 수(number), 지원이 시작되지 않은 면접의 경우 0
 * recruiting: 면접이 시작되었는지 아닌지에 대한 참/거짓 값(boolean)
 * startDate?: 면접 시작 날짜(Date)
 * endDate?: 면접 종료 날짜(Date)
 */
export type interviewCardInfo = {
  id: number
  title: string
  allApplicant: number
  checkApplicant: number
  recruiting: boolean
  startDate?: Date
  endDate?: Date
}

const interview: Array<interviewCardInfo> = [
  {
    id: 1,
    title: '2022 카카오 1분기 2차 면접',
    allApplicant: 120,
    checkApplicant: 65,
    recruiting: true,
    startDate: new Date('2022-02-02'),
    endDate: new Date('2022-03-22')
  },
  {
    id: 2,
    title: '2022 감자 1분기 2차 면접',
    allApplicant: 120,
    checkApplicant: 65,
    recruiting: true,
    startDate: new Date('2022-03-01'),
    endDate: new Date('2022-03-04')
  },
  {
    id: 3,
    title: '2022 Ham 동아리 면접',
    allApplicant: 0,
    checkApplicant: 0,
    recruiting: false
  }
]

export default function Main() {
  return <MainPage interview={interview} />
}
