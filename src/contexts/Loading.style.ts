import styled from 'styled-components'

export const Container = styled.div<{ isLoading }>`
  width: 100vw;
  height: 100vh;
  position: absolute;
  pointer-events: ${({ isLoading }) => (isLoading ? 'auto' : 'none')};
  opacity: ${({ isLoading }) => (isLoading ? '100%' : '0%')};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
`
export const Cover = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #000000;
  opacity: 70%;
`
export const Loading = styled.div`
  border: 8px solid #f3f3f3;
  border-top: 8px solid #999999;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`
