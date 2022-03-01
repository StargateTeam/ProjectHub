import React, { CSSProperties } from 'react'
import styled from 'styled-components'
import { useForm, SubmitHandler } from 'react-hook-form'
import Button from '@/components/Atoms/Button'
import Input from '@/components/Atoms/Input'
import gridSize from '@/constants/styles/gridSize'

type Inputs = {
  idRequired: string
  passwordRequired: string
}
export default function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<Inputs>()

  const onFormSubmit: SubmitHandler<Inputs> = ({
    idRequired,
    passwordRequired
  }) => {
    console.log('id', idRequired)
    console.log('pw', passwordRequired)
  }
  return (
    <Container>
      <Wrapper>
        <LogoWrapper>
          <Logo src="https://cdn-icons-png.flaticon.com/512/6877/6877758.png" />
        </LogoWrapper>
        <Title>Sign in to 면접프로젝트이름</Title>
        <LoginForm onSubmit={handleSubmit(onFormSubmit)}>
          <InputWrapper>
            <EmailaddressText>Email address</EmailaddressText>
            {errors.idRequired && errors.idRequired.type === 'required' ? (
              <Error>이메일을 입력해주세요.</Error>
            ) : (
              errors.idRequired &&
              errors.idRequired.type === 'pattern' && (
                <Error>이메일 형식으로 맞춰주세요.</Error>
              )
            )}
            <EmailaddressInput
              type="text"
              placeholder="Email address"
              {...register('idRequired', {
                required: true,
                pattern:
                  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
              })}
            />
            {/* Input Atoms를 쓰려했지만 form라이브러리를 적용하는게 귀찮아서 일단 input 씀 */}
            {/* <Input
              rounded="normal"
              width="full"
              height="small"
              placeholder="Email address"
              style={InputStyle}
            /> */}
            <PasswordTextWrapper>
              <PasswordText>Password</PasswordText>
              <PasswordForgotText>비밀번호 찾기</PasswordForgotText>
            </PasswordTextWrapper>
            {errors.passwordRequired && <Error>패스워드를 입력해주세요.</Error>}
            <PasswordInput
              placeholder="Password"
              type="password"
              {...register('passwordRequired', { required: true })}
            />
            {/* Input Atoms를 쓰려했지만 form라이브러리를 적용하는게 귀찮아서 일단 input 씀 */}
            {/* <Input
              rounded="normal"
              width="full"
              height="small"
              placeholder="Password"
              style={InputStyle}
              //type="password" 를 넣고싶슴다
            /> */}
          </InputWrapper>
          <ButtonWrapper>
            <Button
              rounded="normal"
              width="fit"
              height="small"
              theme="gray"
              buttonType="submit"
              style={ButtonStyle}
            >
              Sign in
            </Button>
          </ButtonWrapper>
        </LoginForm>
        <SignUpWrapper>
          <SignUpText>계정이 없으신가요?</SignUpText>
          <SignUpButton>계정 만들기</SignUpButton>
        </SignUpWrapper>
      </Wrapper>
    </Container>
  )
}
const ButtonStyle: CSSProperties = {
  color: '#ffffff',
  backgroundColor: '#40d269',
  fontWeight: 'bold',
  cursor: 'pointer',
  border: 'none'
}
const InputStyle: CSSProperties = {
  border: 'none',
  fontSize: '15px',
  paddingLeft: gridSize.md
}

const EmailaddressInput = styled.input`
  width: 100%;
  margin-bottom: 20px;
  height: 35px;
  border-radius: 5px;
  border: none;
  padding-left: 10px;
`
const PasswordInput = styled.input`
  width: 100%;
  height: 35px;
  border-radius: 5px;

  border: none;
  padding-left: 10px;
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Wrapper = styled.div`
  position: absolute;
  top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const LogoWrapper = styled.div``
const Logo = styled.img`
  width: 80px;
  height: 80px;
`
const Title = styled.div`
  margin: 15px 0px;
  font-size: 20px;
`

const LoginForm = styled.form`
  width: 300px;
  height: 300px;
  background-color: #f9f9f9;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 20px;
  margin-bottom: 30px;
`
const Error = styled.div`
  font-size: 12px;
  color: red;
`

const InputWrapper = styled.div`
  width: 100%;
  height: 85%;
`
const EmailaddressText = styled.div`
  width: 100%;
  margin-bottom: 10px;
  font-size: 15px;
`

const PasswordTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  margin-bottom: 10px;
  margin-top: 20px;
`
const PasswordText = styled.div`
  font-size: 15px;
`
const PasswordForgotText = styled.div`
  color: #1480ff;
  font-size: 10px;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 15px; */
  height: 15%;
`

const SignUpWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`
const SignUpText = styled.div`
  font-size: 15px;
`
const SignUpButton = styled.div`
  font-size: 15px;

  color: #1480ff;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`
