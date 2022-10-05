import styled from 'styled-components'

import { Color } from 'enums'

export const CalendarWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 30px;
  padding: 2rem 1rem;
  margin: 2rem 0;
  box-shadow: 0px 19px 60px rgb(0 0 0 / 8%);
  background: ${props => props.theme.activeCard};
  color: ${Color.white};
`

export const GoogleButton = styled.button`
  display: inline-flex;
  align-items: center;
  margin-right: 20px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid transparent;
  font-weight: 500;
  color: ${Color.gray};
  background-color: ${Color.white};
`
