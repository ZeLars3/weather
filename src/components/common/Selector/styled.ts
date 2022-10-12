import styled from 'styled-components'

export const CustomSelector = styled.select`
  width: 10rem;
  height: 1.5rem;
  border-radius: 0.4rem;
  border: 1px solid ${(props) => props.theme.activeCard};
`

export const CustomOption = styled.option``
