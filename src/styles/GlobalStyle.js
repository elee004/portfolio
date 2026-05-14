import { createGlobalStyle } from 'styled-components'

export const theme = {
  colors: {
    bg: '#fafaf8',
    text: '#1a1a1a',
    textMuted: '#6b6b6b',
    accent: '#c4694f',
    cardBg: '#ffffff',
    border: '#e8e8e4',
  },
  fonts: {
    sans: "'DM Sans', sans-serif",
    serif: "'DM Serif Display', serif",
  },
  breakpoints: {
    md: '768px',
    lg: '1024px',
  },
}

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${theme.fonts.sans};
    background-color: ${theme.colors.bg};
    color: ${theme.colors.text};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    max-width: 100%;
    display: block;
  }
`

export default GlobalStyle
