import styled from 'styled-components'

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: dimgray;
  color: ${(props) => props.theme.logoText};
`

export const AppGlass = styled.div`
  height: 97%;
  width: 97%;
  padding: 2rem 0 5rem 0;
  min-height: 97vh;
  border-radius: 2rem;
  background: ${(props) => props.theme.bgColor};
`

export const ThemeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Container = styled.div`
  margin: 0 auto;
  width: 70%;

  @media (max-width: 768px) {
    width: 95%;
  }
`

export const AppName = styled.h1`
  padding-bottom: 20px;
  text-align: center;
`
