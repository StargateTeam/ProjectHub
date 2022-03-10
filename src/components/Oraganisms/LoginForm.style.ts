import styled, { CSSProperties } from 'styled-components'

export const InputStyle: CSSProperties = {
  border: 'none',
  fontSize: '15px',
  paddingLeft: '12px',
  width: '100%',
  height: '35px',
  borderRadius: '5px'
}

export const ButtonStyle: CSSProperties = {
  color: '#ffffff',
  backgroundColor: '#40d269',
  fontWeight: 'bold',
  cursor: 'pointer',
  border: 'none'
}
export const LoginFormContainer = styled.form`
  width: 300px;
  height: 300px;
  background-color: #f9f9f9;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 20px;
  margin-bottom: 30px;
`
export const Error = styled.div`
  font-size: 12px;
  color: red;
`

export const InputWrapper = styled.div`
  width: 100%;
  height: 85%;
`
export const InputTitle = styled.div`
  font-size: 15px;
`
export const EmailaddressText = styled(InputTitle)`
  width: 100%;
  margin-bottom: 10px;
`

export const PasswordTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  margin-bottom: 10px;
  margin-top: 20px;
`

export const PasswordForgotText = styled.div`
  color: #1480ff;
  font-size: 10px;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15%;
`
