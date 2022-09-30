import { FC } from 'react'
import {
  NavigateFunction,
  useNavigate
} from 'react-router-dom'

import NotFound from 'assets/img/cloud.svg'

import {
  Wrapper,
  ErrorTitle,
  ErrorImg,
  ErrorSubtitle,
  Button
} from './styled'

export const PageNotFound: FC = () => {
  const navigate: NavigateFunction = useNavigate()

  const handleComeBack = (): void => {
    navigate('/')
  }

  return (
    <Wrapper>
      <ErrorTitle>404 Error</ErrorTitle>
      <ErrorImg src={NotFound} alt="404 Not Found" />
      <ErrorSubtitle>Page not found</ErrorSubtitle>
      <Button onClick={handleComeBack}>Go back Home</Button>
    </Wrapper>
  )
}
