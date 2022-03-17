import { differenceInDays, differenceInMinutes } from 'date-fns'

/** 남은 면접 기간을 percent로 계산해주는 함수 */
export const calculatePercent = (
  startDate: Date | undefined,
  endDate: Date | undefined,
  today: Date
): number => {
  if (startDate && endDate) {
    return Math.round(
      (differenceInMinutes(startDate, today) /
        differenceInMinutes(startDate, endDate)) *
        100
    )
  } else {
    return 0
  }
}

/** 면접 기간의 남은 날짜를 계산해주는 함수 */
export const calculateDays = (
  endDate: Date | undefined,
  today: Date
): number => {
  if (endDate) {
    return differenceInDays(endDate, today)
  } else {
    return 0
  }
}
