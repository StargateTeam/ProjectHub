import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Wrapper = styled.div`
  position: absolute;
  top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const LogoWrapper = styled.div``
export const Logo = styled.img`
  width: 80px;
  height: 80px;
`
export const Title = styled.div`
  margin: 15px 0px;
  font-size: 20px;
`

export const SignUpWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
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
