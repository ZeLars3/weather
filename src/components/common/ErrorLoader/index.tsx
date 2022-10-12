import { FC } from 'react'

import NotFound from 'assets/img/cloud.svg'

import { Description, ErrorImg, Wrapper } from './styled'

export const ErrorLoader: FC = () => (
  <Wrapper>
    <ErrorImg src={NotFound} alt="Error" />
    <Description>Something wrong</Description>
  </Wrapper>
)
