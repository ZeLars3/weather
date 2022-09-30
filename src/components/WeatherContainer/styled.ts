import styled from 'styled-components'

export const WeatherWrapper = styled.div`
  margin: 0 auto;
  margin-top: 2rem;
`

export const WeatherListCard = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  justify-content: space-evenly;

  @media (max-width: 820px) {
    margin-top: 0.5rem;
    gap: 5px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
  }

  @media (max-width: 600px) {
    margin-top: 0.5rem;
    gap: 5px;
  }

  @media (max-width: 400px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`
