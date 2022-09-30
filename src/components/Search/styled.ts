import styled from 'styled-components'

import { Color } from '../../enums'

export const SearchWrapper = styled.div``

export const SearchForm = styled.form`
  margin: 0 auto;
  display: flex;
`

export const SearchInput = styled.input`
  padding: 1rem;
  border-radius: 20px 0 0 20px;
  outline: none;
  border: 1px solid ${Color.gray};
  flex: 0 1 90%;

  &:focus {
    box-shadow: ${Color.boxShadow};
  }

  @media (max-width: 567px) {
    padding: 0.4rem 1rem;
  }
`

export const Button = styled.button`
  border-radius: 0 20px 20px 0;
  outline: none;
  border: none;
  flex: 1 1 110px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: ${Color.mediumGrey};

  &:hover {
    background-color: ${Color.yellow};
    color: ${Color.darkBlue};
  }

  &:focus {
    box-shadow: ${Color.boxShadow};
  }
`
