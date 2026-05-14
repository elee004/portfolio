import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '../styles/GlobalStyle'

export default function Navbar() {
  return (
    <Nav>
      <Brand to="/">Stephanie Lee</Brand>
      <Links>
        <NavLink to="/" end>Projects</NavLink>
        <NavLink to="/about">About Me</NavLink>
        <ExternalLink href="mailto:stephhlee671@gmail.com">Contact</ExternalLink>
      </Links>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 2.5rem;
  position: sticky;
  top: 0;
  background-color: ${theme.colors.bg};
  border-bottom: 1px solid ${theme.colors.border};
  z-index: 100;

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 1rem 1.25rem;
  }
`

const Brand = styled(NavLink)`
  font-family: ${theme.fonts.serif};
  font-size: 1.1rem;
  letter-spacing: 0.02em;
`

const Links = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  a {
    font-size: 0.9rem;
    font-weight: 400;
    color: ${theme.colors.textMuted};
    transition: color 0.2s ease;

    &:hover,
    &.active {
      color: ${theme.colors.text};
    }
  }
`

const ExternalLink = styled.a`
  font-size: 0.9rem;
  font-weight: 400;
  color: ${theme.colors.textMuted};
  transition: color 0.2s ease;

  &:hover {
    color: ${theme.colors.text};
  }
`
