import { DateText, DateTextWrap } from './RecruitDate.style'

type Props = {
  recruiting: boolean
  days: number
}

export default function RecruitDate({ recruiting, days }: Props) {
  return (
    <DateTextWrap w="full" hAlign="right">
      <DateText fontWeight="bold" color="#666666">
        {recruiting ? (days < 0 ? '면접 종료' : `${days}일 남음`) : 0}
      </DateText>
    </DateTextWrap>
  )
}
