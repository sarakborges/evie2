import styled, { css } from 'styled-components'

const PrimaryButton = css`
  background-color: var(--primaryButtonBackground);
  border-radius: 8px;

  color: var(--primaryButtonTextColor);

  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 1px 8px -2px var(--primaryButtonShadow);
  }
`

const TransparentButton = css`
  background-color: transparent;
  border-radius: 8px;

  color: var(--transparentButtonColor);

  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 1px 8px -2px var(--primaryButtonShadow);
  }
`

interface ButtonStyleProps {
  primary?: boolean
  secondary?: boolean
  transparent?: boolean
  round?: boolean
}
export const Button = styled.button<ButtonStyleProps>`
  display: flex;
  place-content: center;
  place-items: center;
  gap: 16px;

  padding: 8px;

  border: 0;
  border-radius: ${({ round }) => (round ? '50%' : '4px')};

  font-size: 12px;
  letter-spacing: inherit;

  cursor: pointer;

  transition: background-color 0.3s, color 0.3s, border-color 0.3s;

  ${({ primary, secondary }) => (primary || !secondary) && PrimaryButton}
  /* ${({ secondary }) => secondary && PrimaryButton} */
  ${({ transparent }) => transparent && TransparentButton}
`
