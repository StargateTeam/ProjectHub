import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Box from '@/components/Atoms/Box'
import InputForm from '@/components/Atoms/Form/inputForm'
import colors from '@/constants/styles/colorScheme'
import { compareDate } from '@/core/utils/compareDate'

import {
  BarWrapper,
  BoxWrapper,
  CustomButton,
  DateTitleWrapper,
  InputStyle,
  OptionCheckbox,
  OptionTitle,
  OptionWrapper
} from './CardSetting.style'

export type CardSettingInputs = {
  [key: string]: any
}

export const CardSetting = () => {
  const [isPassword, setIsPassword] = useState(false)

  const {
    handleSubmit,
    formState: { errors },
    control
  } = useForm<CardSettingInputs>()

  const onFormSubmit: SubmitHandler<CardSettingInputs> = (e) => {
    if (
      compareDate(new Date(e.startDateRequired), new Date(e.endDateRequired)) <
      0
    ) {
      alert('면접 종료일이 면접 시작일보다 빠릅니다')
      return
    } else if (!isPassword) {
      e.passwordRequired = undefined
    } else if (isPassword && e.passwordRequired === '') {
      alert('비밀번호를 입력해주세요')
      return
    }
    console.log('결과물: ', e)
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
    <Box
      bgColor="coolGray.300"
      hAlign="center"
      style={{ paddingTop: '50px', paddingBottom: '50px' }}
    >
      <BoxWrapper
        direction="column"
        bgColor="white"
        rounded="normal"
        hAlign="center"
      >
        <form
          onSubmit={handleSubmit(onFormSubmit)}
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Box direction="column" w="70%">
            {/* 면접제목 */}
            <OptionWrapper>
              <OptionTitle>면접 제목</OptionTitle>
              {errors.titleRequired &&
                errors.titleRequired.type === 'required' && (
                  <Box
                    style={{ color: colors.danger['600'], fontSize: '12px' }}
                  >
                    제목을 입력해주세요.
                  </Box>
                )}
              <Box>
                <InputForm
                  name="titleRequired"
                  control={control}
                  rules={{
                    required: true
                  }}
                  placeholder="제목을 입력해주세요."
                  style={InputStyle}
                />
              </Box>
            </OptionWrapper>
            {/* 면접 시작일-종료일 */}
            <OptionWrapper>
              <DateTitleWrapper w="full">
                <OptionTitle>면접 시작일</OptionTitle>
                <OptionTitle>면접 종료일</OptionTitle>
              </DateTitleWrapper>
              <Box vAlign="middle">
                <InputForm
                  name="startDateRequired"
                  control={control}
                  type="datetime-local"
                  defaultValue={handleDateView(new Date())}
                  rules={{
                    required: true
                  }}
                  style={InputStyle}
                />
                <BarWrapper fontWeight="bold">-</BarWrapper>
                <InputForm
                  name="endDateRequired"
                  control={control}
                  type="datetime-local"
                  defaultValue={handleDateView(new Date())}
                  rules={{
                    required: true
                  }}
                  style={InputStyle}
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
                  <InputForm
                    name="passwordRequired"
                    control={control}
                    rules={{
                      required: false
                    }}
                    placeholder="비밀번호를 입력해주세요."
                    style={InputStyle}
                  />
                ) : (
                  <InputForm
                    disabled
                    name="passwordRequired"
                    control={control}
                    rules={{
                      required: false
                    }}
                    placeholder="비밀번호를 입력해주세요."
                    style={{ ...InputStyle, backgroundColor: 'gray' }}
                  />
                )}
              </Box>
            </OptionWrapper>
            {/* 저장 */}
            <Box>
              <CustomButton color="green" buttonType="submit">
                저장
              </CustomButton>
            </Box>
          </Box>
        </form>
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
      </BoxWrapper>
    </Box>
  )
}
