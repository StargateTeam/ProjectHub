import { MainPage } from '@/components/Templetes/MainPage'
import type {
  interviewCardInfo,
  interviewerBannersInfo
} from '@/types/interview'

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

const banners: interviewerBannersInfo = {
  userName: '정윤미',
  totalJobInterviewCount: [6, 37, 13],
  imageSrc: [
    'https://cdn.pixabay.com/photo/2016/02/27/06/43/cherry-blossom-tree-1225186_960_720.jpg',
    'https://cdn.pixabay.com/photo/2017/10/10/07/48/beach-2836300_960_720.jpg',
    'https://cdn.pixabay.com/photo/2018/11/09/08/08/forest-3804001_960_720.jpg',
    'https://cdn.pixabay.com/photo/2017/01/14/13/59/castelmezzano-1979546_960_720.jpg',
    'https://cdn.pixabay.com/photo/2016/11/29/09/16/architecture-1868667_960_720.jpg'
  ]
}

export default function Main() {
  return (
    <MainPage
      interview={interview}
      banners={banners}
      makingInterview={makingInterview}
    />
  )
}
