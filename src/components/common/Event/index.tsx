import { FC } from 'react'

interface IPropTypes {
  description: string
}

export const Event: FC<IPropTypes> = ({ description }) => {
  return <p>{description}</p>
}
