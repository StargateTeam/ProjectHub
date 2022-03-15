import styled from 'styled-components'

export const Wrapper = styled.div`
  position: absolute;
  top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Logo = styled.img`
  width: 80px;
  height: 80px;
`
export const Title = styled.div`
  margin: 15px 0px;
  font-size: 20px;
`

export const SignUpText = styled.div`
  font-size: 15px;
`
export const SignUpButton = styled(SignUpText)`
  color: #1480ff;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`
