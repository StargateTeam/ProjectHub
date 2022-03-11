import styled from 'styled-components'

const MainContainer = styled.div``

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;
  align-items: center;
  width: 332px;
  height: 287px;
  background: #ffffff;
  border: 1px solid #666666;
  box-sizing: border-box;
`

const CardTitleWrap = styled.div`
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

const ApplicantWrap = styled.div`
  margin: 8px 16px;
  width: -webkit-fill-available;
  display: flex;
  justify-content: space-between;
`

const AllApplicant = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
`

const NewApplicant = styled.div`
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

const CheckApplicant = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  color: #6dcd01;
`

const ApplicantCount = styled.div`
  margin-left: 8px;
`

const BottomDateWrap = styled.div`
  width: -webkit-fill-available;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
`
export {
  AllApplicant,
  ApplicantCount,
  ApplicantWrap,
  BottomDateWrap,
  CardContainer,
  CardTitleWrap,
  CheckApplicant,
  MainContainer,
  NewApplicant
}
