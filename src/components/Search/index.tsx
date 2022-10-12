import React, { FC, useState } from 'react'
import { FaSearchLocation } from 'react-icons/fa'

import { getWeather } from 'store/actions'
import {
  AppDispatch,
  useAppDispatch,
  useAppSelector,
} from 'types'

import {
  Button,
  SearchForm,
  SearchInput,
  SearchWrapper,
} from './styled'

export const Search: FC = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const userCity = useAppSelector(
    (state: any) => state.location?.location?.city?.name_en,
  )

  const [value, setValue] = useState <string>(userCity)

  const handlerChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setValue(e.target.value)
  }

  const handleSearchCity = (
    e: React.FormEvent<HTMLFormElement>,
  ): void => {
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
          <FaSearchLocation />
          {' '}
          Search
        </Button>
      </SearchForm>
    </SearchWrapper>
  )
}
