import styled from 'styled-components'

export const Topbar = styled.div`
  display: flex;
  place-items: center;
  place-content: space-between;
  gap: 16px;

  padding: 16px;

  background-color: var(--topbarBackground);

  > p {
    max-width: 100%;
    overflow: hidden;

    text-overflow: ellipsis;
  }

  button {
    min-width: 40px;
    overflow: hidden;

    > svg {
      fill: var(--topbarBackground);
      width: 24px;
    }
  }
`
