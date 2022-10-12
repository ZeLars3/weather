import { FC } from 'react'

import { IEvent } from 'types'

import { Text } from './styled'

export const Event: FC<IEvent> = ({ description }) => (
  <Text>{description}</Text>
)
