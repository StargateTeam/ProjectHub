import Text from '@/components/Atoms/Text'

import * as S from './EmailBox.style'
export const EmailBox = () => {
  return (
    <S.Wrapper hAlign="left" direction="column">
      <S.TextWrapper>
        <Text>Email address</Text>
      </S.TextWrapper>
      <S.EmailInput
        width="full"
        rounded="full"
        height="small"
        placeholder="Email address"
      />
    </S.Wrapper>
  )
}
