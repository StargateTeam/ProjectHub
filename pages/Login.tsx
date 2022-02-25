import React from 'react';
import styled from 'styled-components';

export default function Login() {
  return (
    <Container>
      <Wrapper>
        <LogoWrapper>
          <Logo src="https://cdn-icons-png.flaticon.com/512/6877/6877758.png" />
        </LogoWrapper>
        <TitleWrapper>Sign in to 면접프로젝트이름</TitleWrapper>
        <LoginFormContainer>
          <InputWrapper>
            <EmailaddressText>Email address</EmailaddressText>
            <EmailaddressInput placeholder="Email address" />
            <PasswordTextWrapper>
              <PasswordText>Password</PasswordText>
              <PasswordForgotText>비밀번호 찾기</PasswordForgotText>
            </PasswordTextWrapper>

            <PasswordInput placeholder="Password" />
          </InputWrapper>

          <SubmitButton>Sign in</SubmitButton>
        </LoginFormContainer>
        <SignUpWrapper>
          <SignUpText>계정이 없으신가요?</SignUpText>
          <SignUpButton>계정 만들기</SignUpButton>
        </SignUpWrapper>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  position: absolute;
  top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LogoWrapper = styled.div``;
const Logo = styled.img`
  width: 80px;
  height: 80px;
`;
const TitleWrapper = styled.div`
  margin: 15px 0px;
  font-size: 20px;
`;

const LoginFormContainer = styled.form`
  width: 300px;
  height: 240px;
  background-color: #f9f9f9;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 20px 20px;
  margin-bottom: 30px;
`;

const InputWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
const EmailaddressText = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;
const EmailaddressInput = styled.input`
  width: 100%;
  margin-bottom: 20px;
  height: 30px;
  border-radius: 5px;
  border: none;
`;

const PasswordTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  margin-bottom: 10px;
`;
const PasswordText = styled.div``;
const PasswordForgotText = styled.div`
  color: #1480ff;
  font-size: 10px;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

const PasswordInput = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 5px;

  border: none;
`;

const SubmitButton = styled.div`
  width: auto;
  padding: 8px 35px;
  color: #ffffff;
  background-color: #40d269;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  cursor: pointer;
`;

const SignUpWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;
const SignUpText = styled.div`
  font-size: 15px;
`;
const SignUpButton = styled.div`
  font-size: 15px;

  color: #1480ff;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;
