import { v4 as uuidv4 } from 'uuid'
import { ChangeEvent, FC, useEffect } from 'react'

import { SERVICES } from 'constants/index'
import { AppDispatch, useAppDispatch } from 'types'

import { CustomOption, CustomSelector } from './styled'
import { actions } from 'store/actionCreator'

export const Selector: FC = () => {
  const dispatch: AppDispatch = useAppDispatch()

  const handleService = (
    event: ChangeEvent<HTMLSelectElement>,
  ): void => {
    dispatch(actions.setService(event.target.value))
  }

  useEffect(() => {
    dispatch(actions.setService(SERVICES[0]))
  }, [])

  return (
    <CustomSelector
      defaultValue={SERVICES[0]}
      onChange={handleService}>
      {SERVICES.map((name: string) => (
        <CustomOption key={uuidv4()} value={name}>
          {name}
        </CustomOption>
      ))}
    </CustomSelector>
  )
}
