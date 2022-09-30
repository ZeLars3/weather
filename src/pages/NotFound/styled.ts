import styled from 'styled-components'

import { Color } from '../../enums'

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${Color.borderCity};
`

export const ErrorTitle = styled.h2`
  font-size: 48px;
  color: ${Color.greyLight};
`

export const ErrorImg = styled.img`
  height: 200px;
`

export const ErrorSubtitle = styled.span`
  margin: 1rem 0 1.5rem 0;
  font-size: 24px;
  color: ${Color.greyLight};
`

export const Button = styled.button`
  min-width: 156px;
  height: 40px;
  padding: 0 18px;
  border-radius: 15px;
  border: none;
  transition: 0.5s;
  background-color: ${Color.greyLight};

  &:hover {
    background-color: ${Color.yellow};
  }
`
