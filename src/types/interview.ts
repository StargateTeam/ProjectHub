/**
 * @description interviewCard 에 들어갈 데이터를 담는 type
 */
export type interviewCardInfo = {
  /** 각각의 인터뷰를 구분하며 db에 들어가는 내용과 동일한 key값(number) */
  id: number
  /** 면접 제목(string) */
  title: string
  /** 해당 면접에 대한 지원자의 수(number), 지원이 시작되지 않은 면접의 경우 0 */
  allApplicant: number
  /** 면접관 측에서 체크한 지원자의 수(number), 지원이 시작되지 않은 면접의 경우 0 */
  checkApplicant: number
  /** 면접이 시작되었는지 아닌지에 대한 참/거짓 값(boolean) */
  recruiting: boolean
  /** 면접 시작 날짜(Date) */
  startDate?: Date
  /** 면접 종료 날짜(Date) */
  endDate?: Date
}

/**
 * @description interview 종료시 보일 데이터를 담는 type
 */
export type overInterviewInfo = {
  /** 면접 제목(string) */
  title: string
  /** 면접 시작 시간(Date) */
  time: Date
  /** 면접 지원자 이메일(string) */
  intervieweeEmail: string
}
