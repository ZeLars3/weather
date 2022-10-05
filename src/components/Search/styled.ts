import styled from 'styled-components'

import { Color } from 'enums'

export const SearchWrapper = styled.div``

export const SearchForm = styled.form`
  margin: 0 auto;
  display: flex;
`

export const SearchInput = styled.input`
  padding: 1rem;
  border-radius: 20px 0 0 20px;
  outline: none;
  flex: 0 1 90%;
  border: 1px solid ${Color.gray};

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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  transition: all 0.3s ease 0s;
  background-color: ${Color.mediumGrey};

  &:hover {
    background-color: ${Color.yellow};
    color: ${Color.darkBlue};
  }

  &:focus {
    box-shadow: ${Color.boxShadow};
  }
`
