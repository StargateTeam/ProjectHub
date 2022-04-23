import DefaultHeader from '@/components/Oraganisms/Headers/DefaultHeader'
import { UserSectionPage } from '@/components/Templetes/UserSectionPage'
import { Page } from '@/types/context'
import { interviewCardInfo } from '@/types/interview'

const interviewData: interviewCardInfo = {
  id: 1,
  title: '2022 카카오 1분기 2차 면접',
  allApplicant: 120,
  checkApplicant: 65,
  recruiting: true,
  startDate: new Date('2022-02-02'),
  endDate: new Date('2022-05-22')
}

const userSection: Page = () => {
  return <UserSectionPage interview={interviewData} />
}
userSection.header = DefaultHeader

export default userSection
