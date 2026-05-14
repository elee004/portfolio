import styled from 'styled-components'
import { theme } from '../styles/GlobalStyle'

export default function Footer() {
  return (
    <FooterWrapper>
      <Heading>let's chat</Heading>
      <Links>
        <FooterLink href="mailto:stephhlee671@gmail.com">
          stephhlee671@gmail.com
        </FooterLink>
        <FooterLink
          href="https://linkedin.com/in/stephhlee671"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </FooterLink>
      </Links>
      <Copy>© 2024 Stephanie Lee, fueled by local Blue Bottle</Copy>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 4rem 2rem 3rem;
  border-top: 1px solid ${theme.colors.border};
  text-align: center;
`

const Heading = styled.h2`
  font-family: ${theme.fonts.serif};
  font-size: 2rem;
  font-style: italic;
`

const Links = styled.div`
  display: flex;
  gap: 2rem;
`

const FooterLink = styled.a`
  font-size: 0.95rem;
  color: ${theme.colors.textMuted};
  border-bottom: 1px solid transparent;
  padding-bottom: 1px;
  transition: color 0.2s ease, border-color 0.2s ease;

  &:hover {
    color: ${theme.colors.accent};
    border-color: ${theme.colors.accent};
  }
`

const Copy = styled.p`
  font-size: 0.8rem;
  color: ${theme.colors.textMuted};
  margin-top: 0.5rem;
`
