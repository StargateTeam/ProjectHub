import Box from '@/components/Atoms/Box'
import { LoginForm, LoginPageType } from '@/components/Oraganisms/LoginForm'

import * as S from './LoginPage.style'
export function LoginPage(props: LoginPageType) {
  return (
    <Box width="full" height="full" hAlign="center" vAlign="middle">
      <S.Wrapper>
        <Box>
          <S.Logo src="https://cdn-icons-png.flaticon.com/512/6877/6877758.png" />
        </Box>
        <S.Title>Sign in to 면접프로젝트이름</S.Title>
        <LoginForm {...props} />
        <Box width="full" style={{ justifyContent: 'space-around' }}>
          <S.SignUpText>계정이 없으신가요?</S.SignUpText>
          <S.SignUpButton>계정 만들기</S.SignUpButton>
        </Box>
      </S.Wrapper>
    </Box>
  )
}
