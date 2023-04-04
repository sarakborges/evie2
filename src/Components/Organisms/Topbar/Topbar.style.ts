import styled from 'styled-components'

export const Topbar = styled.div`
  display: flex;
  place-items: center;

  position: sticky;
  top: 0;
  left: 0;
  z-index: 99;

  padding: 8px;

  background-color: var(--topbarBackground);

  svg {
    width: 24px;
  }
`
