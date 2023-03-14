import styled from 'styled-components'

export const RegisterTemplate = styled.div`
  --mainColor: hsl(var(--hue) 35% 40% / 100%);

  --transparentButtonColor: var(--mainColor);
  --formFieldBorder: var(--mainColor);

  --formTextColor: var(--mainColor);
  --formFocusBackgroundColor: hsl(var(--hue) 35% 40% / 10%);

  display: flex;
  flex-flow: column;
  place-content: center;
  place-items: center;
  flex: 1;
  gap: 24px;

  padding: 24px;

  > form {
    display: flex;
    flex-flow: column;
    gap: 32px;

    width: 100%;
  }

  > p > a {
    text-decoration: underline;
  }
`
