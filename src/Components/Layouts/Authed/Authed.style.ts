import styled from 'styled-components'

export const AuthedLayout = styled.div`
  --appBackground: hsl(var(--hue) 20% 95% / 100%);

  display: flex;
  flex-flow: column;

  min-height: 100vh;
  max-width: 100%;
  width: 320px;
  margin: auto;

  background-color: var(--appBackground);
`

export const Topbar = styled.div`
  display: flex;
  place-items: center;
  place-content: space-between;
  gap: 16px;

  padding: 16px;

  background-color: var(--topbarBackground);

  button {
    overflow: hidden;

    > svg {
      fill: var(--topbarBackground);
      width: 24px;
    }

    > img {
      width: 40px;
      aspect-ratio: 1;

      object-fit: cover;
      object-position: center;
    }
  }
`
