import styled from 'styled-components'

export const AuthedLayout = styled.div`
  --appBackground: hsl(var(--hue) 20% 95% / 100%);

  display: flex;

  min-height: 100vh;
  max-width: 100%;
  width: 320px;
  margin: auto;

  background-color: var(--appBackground);
`
