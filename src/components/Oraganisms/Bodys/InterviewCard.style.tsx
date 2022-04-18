import styled from 'styled-components'

import Box from '@/components/Atoms/Box'

export const MainContainer = styled.div`
  width: 332px;
  height: 287px;
`

export const CardContainer = styled(Box)`
  background: #ffffff;
  border: 1px solid #666666;
`

export const CardTitleWrap = styled.div`
  width: 305px;
  height: 150px;
  background: #c5fbff;
  border: 1px solid #666666;
  box-sizing: border-box;
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
`

export const ApplicantWrap = styled(Box)`
  padding: 8px 16px;
  justify-content: space-between;
`

export const AllApplicant = styled(Box)`
  font-weight: bold;
`

export const NewApplicant = styled.div`
  background-color: #f04040;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  color: white;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 12px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-left: 4px;
`

export const CheckApplicant = styled(Box)`
  font-weight: bold;
  color: #6dcd01;
`

export const ApplicantCount = styled.div`
  margin-left: 8px;
`

export const BottomDateWrap = styled(Box)`
  padding-top: 32px;
`
export const ProgressWrap = styled(Box)`
  margin: 8px 16px;
`