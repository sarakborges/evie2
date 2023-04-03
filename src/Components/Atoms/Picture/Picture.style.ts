import styled, { keyframes } from 'styled-components'

import { PictureAtomProps } from './Picture.props'

const placeholderAnimation = keyframes`
  0% {
    background-position: 0% 0%;
  }

  50% {
    background-position: 100% 0%;
  }

  100% {
    background-position: 0% 0%;
  }
`

export const Picture = styled.img<PictureAtomProps>`
  width: ${({ w }) => (w ? `${w}px` : '48px')};
  min-width: ${({ w }) => (w ? `${w}px` : '48px')};
  aspect-ratio: ${({ squared }) => (squared ? 1 : 'auto')};

  object-fit: cover;
  object-position: center;

  font-size: 0;

  background-image: var(--placeholderBg);
  background-size: 400% 400%;

  animation-name: ${placeholderAnimation};
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
  animation-direction: alternate;
`
