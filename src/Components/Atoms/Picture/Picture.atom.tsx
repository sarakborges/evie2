import { FC } from 'react'

import { PictureAtomProps } from './Picture.props'

import * as Styled from './Picture.style'

export const PictureAtom: FC<PictureAtomProps> = ({ src, alt, ...rest }) => {
  return <Styled.Picture {...rest} src={src} alt={alt} />
}
