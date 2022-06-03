import styled, { CSSProperties } from 'styled-components'

import Box from '@/components/Atoms/Box'
import Button from '@/components/Atoms/Button'
import Text from '@/components/Atoms/Text'
import colors from '@/constants/styles/colorScheme'

export const Container = styled(Box)`
  width: 700px;
  min-width: 700px;
  min-height: 700px;

  justify-content: space-around;
`
export const OptionWrapper = styled(Box)`
  flex-direction: column;
  margin-bottom: 30px;
`
export const OptionTitle = styled(Text)`
  font-weight: bold;
  margin-bottom: 10px;
`

export const DateTitleWrapper = styled(Box)`
  justify-content: space-between;
`
export const BarWrapper = styled(Text)`
  margin-left: 10px;
  margin-right: 10px;
`

export const OptionInput = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: 2px solid gray;
  background-color: ${colors.white};
  padding-left: 10px;
`

export const CustomButton = styled(Button)<{ color: 'red' | 'green' }>`
  border: none;
  padding: 10px;
  min-width: 100px;
  border-radius: 10px;
  font-weight: bold;
  color: ${colors.white};
  background-color: ${({ color }) =>
    color === 'red' ? colors.danger[600] : colors.success[600]};
`

export const OptionCheckbox = styled.input`
  width: 25px;
  height: 25px;
  :hover {
    cursor: pointer;
  }
`
export const InputStyle: CSSProperties = {
  width: '100%',
  height: ' 40px',
  borderRadius: '10px',
  border: '2px solid gray',
  backgroundColor: colors.white,
  paddingLeft: '10px'
}

export const Error = styled(Text)`
  color: ${colors.danger['600']};
  font-size: 12px;
`
