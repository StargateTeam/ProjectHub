import { useRef, useState } from 'react'

import Box from '@/components/Atoms/Box'
import colors from '@/constants/styles/colorScheme'
import { compareDate } from '@/core/utils/compareDate'

import {
  BarWrapper,
  Container,
  CustomButton,
  DateTitleWrapper,
  OptionCheckbox,
  OptionInput,
  OptionTitle,
  OptionWrapper
} from './CardSetting.style'

export const CardSetting = () => {
  const [isPassword, setIsPassword] = useState(false)
  const title = useRef(null)
  const startDate = useRef()
  const endDate = useRef(null)
  const password = useRef(null)
  const handleSaveInterView = () => {
    const startDateTypeDate = new Date(startDate.current.value)
    const endDateTypeDate = new Date(endDate.current.value)

    if (title.current.value === '') {
      alert('면접 제목을 입력해주세요')
      return
    }
    if (compareDate(startDateTypeDate, endDateTypeDate) < 0) {
      alert('면접 종료일이 면접 시작일보다 빠릅니다')
      return
    }
    if (isPassword && password.current.value === '') {
      alert('패스워드를 입력해주세요')
      return
    }

    console.log('면접 제목', title.current.value)
    console.log('면접 시작일', startDateTypeDate)
    console.log('면접 종료일', endDateTypeDate)
    isPassword && console.log('면접 패스워드', password.current.value)
    alert('저장완료')
  }
  const handleEndInterView = () => {
    alert('면접을 강제종료했습니다.')
  }
  const handleDeleteInterView = () => {
    alert('면접을 삭제했습니다.')
  }

  const handleDateView = (date: Date | undefined) => {
    if (!date) return ''
    return (
      date.getFullYear() +
      '-' +
      String(date.getMonth() + 1).padStart(2, '0') +
      '-' +
      String(date.getDate()).padStart(2, '0') +
      'T' +
      String(date.getHours()).padStart(2, '0') +
      ':' +
      String(date.getMinutes()).padStart(2, '0')
    )
  }

  return (
    <Container
      direction="column"
      bgColor="white"
      rounded="normal"
      hAlign="center"
    >
      <Box direction="column" w="70%">
        {/* 면접제목 */}
        <OptionWrapper>
          <OptionTitle>면접 제목</OptionTitle>
          <Box>
            <OptionInput ref={title} />
          </Box>
        </OptionWrapper>
        {/* 면접 시작일-종료일 */}
        <OptionWrapper>
          <DateTitleWrapper w="full">
            <OptionTitle>면접 시작일</OptionTitle>
            <OptionTitle>면접 종료일</OptionTitle>
          </DateTitleWrapper>
          <Box vAlign="middle">
            <OptionInput
              type="datetime-local"
              ref={startDate}
              defaultValue={handleDateView(new Date())}
            />
            <BarWrapper fontWeight="bold">-</BarWrapper>
            <OptionInput
              type="datetime-local"
              ref={endDate}
              defaultValue={handleDateView(new Date())}
            />
          </Box>
        </OptionWrapper>
        {/* 면접 비밀번호 */}
        <OptionWrapper>
          <OptionTitle>면접 비밀번호</OptionTitle>
          <Box hAlign="left" vAlign="middle">
            <OptionCheckbox
              type="checkbox"
              onChange={() => {
                setIsPassword((prev) => !prev)
              }}
            />
            {isPassword ? (
              <OptionInput ref={password} />
            ) : (
              <OptionInput
                disabled
                style={{ backgroundColor: colors.coolGray[400] }}
              />
            )}
          </Box>
        </OptionWrapper>
        {/* 저장 */}
        <Box>
          <CustomButton color="green" onClick={handleSaveInterView}>
            저장
          </CustomButton>
        </Box>
      </Box>
      <Box direction="column" vAlign="top" w="70%">
        {/* 면접 강제종료 */}
        <OptionWrapper direction="column">
          <OptionTitle>면접 강제종료</OptionTitle>
          <Box>
            <CustomButton color="red" onClick={handleEndInterView}>
              강제종료
            </CustomButton>
          </Box>
        </OptionWrapper>
        {/* 면접 삭제 */}
        <OptionWrapper direction="column">
          <OptionTitle>면접 삭제</OptionTitle>
          <Box>
            <CustomButton color="red" onClick={handleDeleteInterView}>
              삭제
            </CustomButton>
          </Box>
        </OptionWrapper>
      </Box>
    </Container>
  )
}
