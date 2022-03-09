import { DateText, DateTextWrap } from './RecruitDate.style'

type Props = {
  recruiting: boolean
  days: number
}

export default function RecruitDate({ recruiting, days }: Props) {
  const printDate = recruiting ? (days < 0 ? '면접 종료' : `${days}일 남음`) : 0
  return (
    <DateTextWrap>
      <DateText>{printDate}</DateText>
    </DateTextWrap>
  )
}
