import styled from 'styled-components'

import { Color } from 'enums'

export const ErrorImg = styled.img`
  height: 150px;
`

export const Description = styled.p`
  text-align: center;
  font-weight: bold;
  margin-top: 20px;
  font-size: 20px;
  letter-spacing: 1px;
  color: ${Color.mediumGrey};
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 30px;
`
