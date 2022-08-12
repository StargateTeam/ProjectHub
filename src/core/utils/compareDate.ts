export const compareDate = (startDate: Date, endDate: Date) => {
  const diffDate = endDate.getTime() - startDate.getTime()
  const dateDays = diffDate / (1000 * 3600 * 24)
  return dateDays
  // if (

  // ) {
  // } else {
  //   throw Error('종료일이 시작일보다 빠릅니다!')
  // }
}
