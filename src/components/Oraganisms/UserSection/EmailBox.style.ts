import styled from 'styled-components'

import Box from '@/components/Atoms/Box'
import Input from '@/components/Atoms/Input'

export const Wrapper = styled(Box)`
  width: 300px;
`

export const TextWrapper = styled(Box)`
  margin-bottom: 8px;
  padding-left: 8px;
`

export const EmailInput = styled(Input)`
  border: 1px solid gray;
  padding-left: 10px;
  padding-right: 10px;
`
