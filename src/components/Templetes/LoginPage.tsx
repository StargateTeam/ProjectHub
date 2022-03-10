import { LoginForm, LoginPageType } from '@/components/Oraganisms/LoginForm'

import * as S from './LoginPage.style'
export function LoginPage(props: LoginPageType) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.LogoWrapper>
          <S.Logo src="https://cdn-icons-png.flaticon.com/512/6877/6877758.png" />
        </S.LogoWrapper>
        <S.Title>Sign in to 면접프로젝트이름</S.Title>
        <LoginForm {...props} />
        <S.SignUpWrapper>
          <S.SignUpText>계정이 없으신가요?</S.SignUpText>
          <S.SignUpButton>계정 만들기</S.SignUpButton>
        </S.SignUpWrapper>
      </S.Wrapper>
    </S.Container>
  )
}
