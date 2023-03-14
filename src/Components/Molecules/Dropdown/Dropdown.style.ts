import styled, { css } from 'styled-components'

const DropdownCss = css`
  & + button {
    background-color: var(--mainDark2);
  }
`

interface DropdownStyleProps {
  isOpen: boolean
}
export const Dropdown = styled.div<DropdownStyleProps>`
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 1;

  width: 360px;
  min-height: 44px;
  overflow: hidden;
  overflow-y: auto;

  border-radius: 16px 0 16px 16px;
  background-color: var(--mainDark2);
  box-shadow: 0 2px 3px var(--mainDark1);

  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};

  transition: opacity 0.3s, visibility 0.3s;

  ${({ isOpen }) => isOpen && DropdownCss}
`

export const Header = styled.div`
  display: flex;
  place-content: space-between;
  place-items: center;

  padding: 8px 8px 8px 16px;
`

export const CloseButton = styled.div`
  > button {
    aspect-ratio: 1;

    > svg {
      width: 12px;
      aspect-ratio: 1;

      color: var(--grayLight);
    }
  }
`
