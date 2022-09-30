import React, { useState } from 'react'
import { FaSearchLocation } from 'react-icons/fa'

import { getWeather } from 'store/thunk'

import { AppDispatch, useAppDispatch } from '../../types'
import {
  Button,
  SearchForm,
  SearchInput,
  SearchWrapper,
} from './styled'

export const Search = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const [value, setValue] = useState<string>('')

  const handlerChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setValue(e.target.value)
  }

  const handleSearchCity = (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault()
    dispatch(getWeather(value))
  }

  return (
    <SearchWrapper>
      <SearchForm onSubmit={handleSearchCity}>
        <SearchInput
          type="text"
          placeholder="Enter City"
          value={value}
          onChange={handlerChange}
        />
        <Button>
          <FaSearchLocation /> Search
        </Button>
      </SearchForm>
    </SearchWrapper>
  )
}
