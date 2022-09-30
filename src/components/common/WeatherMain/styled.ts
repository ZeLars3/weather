import styled from 'styled-components'

export const MainWrapper = styled.div<any>`
  border-radius: 30px;
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  background: no-repeat top/100% url(${(props) => props.image});
  box-shadow: 0px 19px 60px rgb(0 0 0 / 8%);
  color: white;
  -webkit-text-stroke-width: 0.1px;
  -webkit-text-stroke-color: gray;
`

export const WeatherData = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 567px) {
    gap: 0.3rem;
  }
`

export const WeatherInfo = styled.div`
  display: flex;
  font-size: 60px;
  flex-wrap: wrap;
  align-items: center;
  flex-basis: 50%;

  @media (max-width: 567px) {
    flex-basis: 100%;
    justify-content: space-between;
    font-size: 40px;
  }
`

export const WeatherTemp = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  > div {
    display: flex;
    align-items: flex-start;
  }
  span {
    font-size: 16px;
  }

  @media (max-width: 567px) {
    order: -1;
    align-items: flex-start;
  }
`

export const WeatherList = styled.ul`
  flex: 0 0 100%;
  padding-left: 0;
  list-style: none;
  font-size: 16px;

  @media (max-width: 567px) {
    flex: 1 1 auto;
    margin-left: auto;
    font-size: 14px;
  }
`

export const WeatherOtherInfo = styled.div`
  text-align: right;

  @media (max-width: 567px) {
    flex: 1;
    font-size: 14px;
  }
`

export const WeatherCity = styled.div`
  margin-bottom: 1rem;
  font-weight: 700;
  font-size: 25px;
  letter-spacing: 0.3rem;

  @media (max-width: 567px) {
    margin-bottom: 0.4rem;
    font-size: 22px;
  }
`

export const WeatherIcon = styled.div``
