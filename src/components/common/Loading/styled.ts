import styled from 'styled-components'

import { Color } from '../../../enums'

export const LoadingWrapper = styled.div`
  position: initial;
  height: auto;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Text = styled.p`
  margin: 0;
  animation: fadeIn 2s infinite linear;
  color: ${Color.white};
`

export const Wrapper = styled.div`
  text-align: center;
`

export const ImageWrapper = styled.div`
  margin: 1.2rem 0;
  transform-origin: 50% 50%;
  animation: spin 4s infinite linear,
  fadeIn 2s infinite linear;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
