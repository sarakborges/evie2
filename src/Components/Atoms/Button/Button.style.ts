import styled, { css } from 'styled-components'

import { ButtonAtomProps } from './Button.props'

const PrimaryButton = css`
  background-color: var(--primaryButtonBackground);

  color: var(--primaryButtonTextColor);

  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 1px 8px -2px var(--primaryButtonShadow);
  }
`

const SecondaryButton = css`
  background-color: var(--secondaryButtonBackground);

  color: var(--secondaryButtonTextColor);

  transition: background-color 0.3s;

  &:hover {
    background-color: var(--secondaryButtonHoverBackground);
  }
`

const TransparentButton = css`
  background-color: transparent;

  color: var(--transparentButtonColor);

  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 1px 8px -2px var(--primaryButtonShadow);
  }
`

export const Button = styled.button<ButtonAtomProps>`
  display: flex;
  place-content: center;
  place-items: center;
  gap: 16px;

  padding: ${({ nopad }) => (nopad ? '0' : '8px')};

  border: 0;
  border-radius: ${({ round }) => (round ? '50%' : '8px')};

  font-size: 12px;
  letter-spacing: inherit;

  cursor: pointer;

  ${({ primary, secondary }) => (primary || !secondary) && PrimaryButton}
  ${({ secondary }) => secondary && SecondaryButton}
  ${({ transparent }) => transparent && TransparentButton}
`
