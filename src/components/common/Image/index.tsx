import { FC } from 'react'

import { Img } from './styled'

interface IpropsType {
  image: string;
  title: string;
}

export const Image: FC<IpropsType> = ({ image, title }) => {
  return <Img src={image} alt={title} />
}
