import Text from '@/components/Atoms/Text'

import * as S from './StartButton.style'

export type StartButtonProps = React.PropsWithChildren<{}>

export const StartButton = (props: StartButtonProps) => {
  return (
    <S.ButtonWrapper hAlign="center" vAlign="middle">
      <S.StartButton w="full" h="medium" theme="primary" rounded="full">
        <Text color="white" fontWeight="bold">
          {props.children}
        </Text>
      </S.StartButton>
    </S.ButtonWrapper>
  )
}
