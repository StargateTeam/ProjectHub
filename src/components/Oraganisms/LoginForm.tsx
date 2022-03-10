import {
  Control,
  FieldError,
  SubmitHandler,
  UseFormHandleSubmit
} from 'react-hook-form'

import { Inputs } from '@/../pages/Login'
import Button from '@/components/Atoms/Button'
import InputForm from '@/components/Atoms/Form/inputForm'

import * as S from './LoginForm.style'

export type LoginPageType = {
  onFormSubmit: SubmitHandler<Inputs>
  handleSubmit: UseFormHandleSubmit<Inputs>
  errors: {
    idRequired?: FieldError | undefined
    passwordRequired?: FieldError | undefined
  }
  control: Control<any>
}

export function LoginForm({
  onFormSubmit,
  handleSubmit,
  errors,
  control
}: LoginPageType) {
  return (
    <S.LoginFormContainer onSubmit={handleSubmit(onFormSubmit)}>
      <S.InputWrapper>
        <S.EmailaddressText>Email address</S.EmailaddressText>
        {errors.idRequired && errors.idRequired.type === 'required' ? (
          <S.Error>이메일을 입력해주세요.</S.Error>
        ) : (
          errors.idRequired &&
          errors.idRequired.type === 'pattern' && (
            <S.Error>이메일 형식으로 맞춰주세요.</S.Error>
          )
        )}

        <InputForm
          name="idRequired"
          control={control}
          rules={{
            required: true,
            pattern:
              /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
          }}
          placeholder="Email address"
          style={S.InputStyle}
        />
        <S.PasswordTextWrapper>
          <S.InputTitle>Password</S.InputTitle>
          <S.PasswordForgotText>비밀번호 찾기</S.PasswordForgotText>
        </S.PasswordTextWrapper>
        {errors.passwordRequired && <S.Error>패스워드를 입력해주세요.</S.Error>}

        <InputForm
          name="passwordRequired"
          control={control}
          rules={{
            required: true
          }}
          placeholder="Password"
          style={S.InputStyle}
        />
      </S.InputWrapper>
      <S.ButtonWrapper>
        <Button
          rounded="normal"
          width="fit"
          height="small"
          theme="gray"
          buttonType="submit"
          style={S.ButtonStyle}
        >
          Sign in
        </Button>
      </S.ButtonWrapper>
    </S.LoginFormContainer>
  )
}
