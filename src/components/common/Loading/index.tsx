import { FC } from 'react'

import Sunny from 'assets/img/sunny.svg'

import { Image } from '../Image'
import {
  LoadingWrapper,
  Text,
  Wrapper,
  ImageWrapper
} from './styled'

export const Loading: FC = () => {
  return (
    <LoadingWrapper>
      <Wrapper>
        <ImageWrapper>
          <Image image={Sunny} title="Loading" />
        </ImageWrapper>
        <Text>Loading Weather!</Text>
      </Wrapper>
    </LoadingWrapper>
  )
}
