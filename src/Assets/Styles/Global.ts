import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    --hue: 280;

    --background: hsl(var(--hue) 20% 15% / 100%);
    --text: hsl(var(--hue) 30% 90% / 100%);
    --textWeak: hsl(var(--hue) 30% 65% / 100%);
    --link: hsl(var(--hue) 40% 40% / 100%);

    --placeholderBg: linear-gradient(90deg,
                                      hsl(var(--hue) 20% 85% / 100%),
                                      hsl(var(--hue) 20% 75% / 100%),
                                      hsl(var(--hue) 20% 85% / 100%)
    );

    --userProfileStoryBorder: hsl(135 65% 35% / 100%);

    --topbarBackground: hsl(var(--hue) 40% 40% / 100%);

    --warningTextColor: hsl(20 70% 50% / 100%);
    --warningBgColor: hsl(20 70% 50% / 20%);

    --primaryButtonBackground: hsl(var(--hue) 35% 40% / 100%);
    --primaryButtonTextColor: hsl(var(--hue) 30% 90% / 100%);
    --primaryButtonShadow: hsl(var(--hue) 30% 10% / 100%);

    --secondaryButtonBackground: hsl(var(--hue) 30% 95% / 100%);
    --secondaryButtonTextColor: hsl(var(--hue) 30% 90% / 100%);
    --secondaryButtonHoverBackground: hsl(var(--hue) 30% 80% / 100%);

    --fontFamily: "Roboto", sans-serif;
  }

  html{
    scrollbar-width: thin;
  }

  body {
    background-color: var(--background);
    
    font-family: var(--fontFamily);
    color: var(--text);
    letter-spacing: 1.5px;

    * {
      box-sizing: border-box;
      scrollbar-width: thin;
      outline: none;
      
      font-family: inherit;
      color: inherit;
      letter-spacing: inherit;
    }

    a {
      text-decoration: none;
    }
  }
`
