import styled from 'styled-components'

import Box from '@/components/Atoms/Box'
import Text from '@/components/Atoms/Text'

export const CardWrap = styled.div`
  min-height: 480px;
  min-width: 424px;
  background-color: white;
  border-radius: 16px;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-left: 16px;
  justify-content: space-between;
  align-items: center;
`

export const ContentWrap = styled(Box)`
  justify-content: space-between;
`

export const ContentText = styled(Text)`
  margin: 0 32px;
`

export const CheckButton = styled.button`
  ${(props) => {
    if (props.children === '합격') {
      return 'background-color: green; margin: 0 0 8px 32px;'
    } else {
      return 'background-color: red; margin: 0 32px 8px 0;'
    }
  }}
  height: 56px;
  width: 168px;
  color: white;
  font-size: 20px;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  margin: 0 16px;
`
