import { FC } from 'react'

import { IImage } from 'types'

import { Img } from './styled'

export const Image: FC<IImage> = ({ image, title }) => (
  <Img src={image} alt={title} />
)
