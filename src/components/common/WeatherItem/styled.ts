import styled from 'styled-components'

export const ItemWrapper = styled.div`
  border-radius: 10px;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  max-width: 150px;
  width: 100%;
  cursor: pointer;
  text-align: center;
  transition: all 0.3s ease 0s;

  &.active {
    transform: scale(1.05);
    background: ${props => props.theme.activeCard};
    color: white;
  }

  @media (max-width: 600px) {
    gap: 0.2rem;
    font-size: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 400px) {
    flex-basis: 33%;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

export const IconWrapper = styled.div`
  font-size: 25px;
`

export const Day = styled.div``
export const Temp = styled.div`
  font-size: 20px;

  span {
    font-size: 20px;
  }
`
export const Description = styled.div``
