import styled from 'styled-components'

export const HomeTemplate = styled.div`
  --mainColor: hsl(var(--hue) 35% 40% / 100%);

  --transparentButtonColor: var(--mainColor);
  --formFieldBorder: var(--mainColor);

  --formTextColor: var(--mainColor);
  --formFocusBackgroundColor: hsl(var(--hue) 35% 40% / 10%);
  --formTextareaBackgroundColor: hsl(var(--hue) 35% 70% / 30%);
  --formTextareaFocusBackgroundColor: hsl(var(--hue) 35% 40% / 10%);

  position: relative;

  flex: 1;
`

export const FloatingPublishButton = styled.div`
  position: absolute;
  right: 16px;
  bottom: 16px;
  z-index: 2;

  svg {
    width: 24px;
  }
`

export const HomeContent = styled.div`
  display: flex;
  place-items: center;
  flex-flow: column;

  max-height: calc(100vh - 68px);
  min-height: calc(100vh - 68px);
  padding: 16px 8px;
  overflow: hidden;
  overflow-y: scroll;
`
