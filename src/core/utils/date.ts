import { differenceInMinutes } from 'date-fns'

/** 남은 면접 기간을 percent로 계산해주는 함수 */
export const calculatePercent = (startDate: Date, endDate: Date): number => {
  const today = new Date()
  const diffToday = differenceInMinutes(startDate, today)
  const diffEndDate = differenceInMinutes(startDate, endDate)
  return Math.round((diffToday / diffEndDate) * 100)
}
