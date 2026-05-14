import { useParams, Link, Navigate } from 'react-router-dom'
import styled from 'styled-components'
import { projects } from '../data/projects'
import { theme } from '../styles/GlobalStyle'

export default function CaseStudy() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  if (!project || !project.caseStudy) return <Navigate to="/" replace />

  const { caseStudy: cs } = project

  return (
    <Main>
      <BackLink to="/">← All Projects</BackLink>

      <Header>
        <RoleLabel>{project.role}</RoleLabel>
        <Title>{project.title}</Title>
        <Description>{project.description}</Description>

        <MetaGrid>
          <MetaItem>
            <MetaLabel>Role</MetaLabel>
            <MetaValue>{cs.overview.role}</MetaValue>
          </MetaItem>
          <MetaItem>
            <MetaLabel>Timeline</MetaLabel>
            <MetaValue>{cs.overview.timeline}</MetaValue>
          </MetaItem>
          {cs.overview.team && (
            <MetaItem>
              <MetaLabel>Team</MetaLabel>
              <MetaValue>{cs.overview.team}</MetaValue>
            </MetaItem>
          )}
          <MetaItem>
            <MetaLabel>Stakeholders</MetaLabel>
            <MetaValue>{cs.overview.stakeholders}</MetaValue>
          </MetaItem>
        </MetaGrid>
      </Header>

      {cs.images && cs.images.length > 0 && (
        <HeroImage>
          <img src={cs.images[0].src} alt={cs.images[0].caption} />
          {cs.images[0].caption && <Caption>{cs.images[0].caption}</Caption>}
        </HeroImage>
      )}

      <Body>
        <Section>
          <SectionHeading>Problem</SectionHeading>
          <p>{cs.problem}</p>
          {cs.problemQuote && <Pullquote>{cs.problemQuote}</Pullquote>}
          {cs.ndaNote && <NdaBadge>{cs.ndaNote}</NdaBadge>}
        </Section>

        <Section>
          <SectionHeading>Research Methods</SectionHeading>
          <List>
            {cs.methods.map((m, i) => <li key={i}>{m}</li>)}
          </List>
        </Section>

        {cs.findings && (
          <Section>
            <SectionHeading>Key Findings</SectionHeading>
            <List>
              {cs.findings.map((f, i) => <li key={i}>{f}</li>)}
            </List>
          </Section>
        )}

        {cs.process && (
          <Section>
            <SectionHeading>Design Process</SectionHeading>
            <p>{cs.process}</p>
          </Section>
        )}

        {cs.images && cs.images.length > 1 && (
          <ImageGrid count={cs.images.slice(1).length}>
            {cs.images.slice(1).map((img, i) => (
              <figure key={i}>
                <img src={img.src} alt={img.caption} loading="lazy" />
                {img.caption && <figcaption>{img.caption}</figcaption>}
              </figure>
            ))}
          </ImageGrid>
        )}

        <Section>
          <SectionHeading>Deliverables</SectionHeading>
          <List>
            {(cs.deliverables || []).map((d, i) => <li key={i}>{d}</li>)}
          </List>
        </Section>

        <Section>
          <SectionHeading>Outcomes</SectionHeading>
          <OutcomeList>
            {cs.outcomes.map((o, i) => <li key={i}>{o}</li>)}
          </OutcomeList>
        </Section>

        {cs.learnings && (
          <Section>
            <SectionHeading>Key Learnings</SectionHeading>
            <List>
              {cs.learnings.map((l, i) => <li key={i}>{l}</li>)}
            </List>
          </Section>
        )}
      </Body>

      <Nav>
        <BackLink to="/">← Back to Projects</BackLink>
      </Nav>
    </Main>
  )
}

const Main = styled.main`
  max-width: 860px;
  margin: 0 auto;
  padding: 2rem 2.5rem 6rem;

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 1.5rem 1.25rem 4rem;
  }
`

const BackLink = styled(Link)`
  display: inline-block;
  font-size: 0.875rem;
  color: ${theme.colors.textMuted};
  margin-bottom: 2.5rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${theme.colors.accent};
  }
`

const Header = styled.div`
  margin-bottom: 2.5rem;
`

const RoleLabel = styled.p`
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${theme.colors.accent};
  margin-bottom: 0.6rem;
`

const Title = styled.h1`
  font-family: ${theme.fonts.serif};
  font-size: clamp(2rem, 5vw, 3rem);
  line-height: 1.1;
  margin-bottom: 1rem;
`

const Description = styled.p`
  font-size: 1.1rem;
  color: ${theme.colors.textMuted};
  line-height: 1.7;
  max-width: 600px;
  margin-bottom: 2rem;
`

const MetaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1.25rem;
  padding: 1.5rem;
  background: ${theme.colors.cardBg};
  border: 1px solid ${theme.colors.border};
  border-radius: 10px;
`

const MetaItem = styled.div``

const MetaLabel = styled.p`
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${theme.colors.accent};
  margin-bottom: 0.3rem;
`

const MetaValue = styled.p`
  font-size: 0.875rem;
  color: ${theme.colors.text};
  line-height: 1.5;
`

const HeroImage = styled.div`
  margin-bottom: 3rem;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid ${theme.colors.border};

  img {
    width: 100%;
    display: block;
  }
`

const Caption = styled.p`
  font-size: 0.8rem;
  color: ${theme.colors.textMuted};
  padding: 0.6rem 1rem;
  background: ${theme.colors.cardBg};
  border-top: 1px solid ${theme.colors.border};
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

const Section = styled.section`
  p {
    font-size: 1rem;
    line-height: 1.8;
    color: ${theme.colors.text};
  }
`

const SectionHeading = styled.h2`
  font-family: ${theme.fonts.serif};
  font-size: 1.4rem;
  margin-bottom: 1rem;
`

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  li {
    font-size: 0.975rem;
    line-height: 1.7;
    color: ${theme.colors.text};
    padding-left: 1.2rem;
    position: relative;

    &::before {
      content: '—';
      position: absolute;
      left: 0;
      color: ${theme.colors.accent};
      font-size: 0.8em;
    }
  }
`

const OutcomeList = styled(List)`
  li::before {
    content: '✓';
    color: ${theme.colors.accent};
  }
`

const Pullquote = styled.blockquote`
  margin: 1.5rem 0 0;
  padding: 1.25rem 1.5rem;
  border-left: 3px solid ${theme.colors.accent};
  background: ${theme.colors.cardBg};
  border-radius: 0 8px 8px 0;
  font-size: 1rem;
  font-style: italic;
  color: ${theme.colors.text};
  line-height: 1.7;
`

const NdaBadge = styled.p`
  display: inline-block;
  margin-top: 1rem;
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  color: ${theme.colors.textMuted};
  background: ${theme.colors.border};
  padding: 0.3rem 0.75rem;
  border-radius: 4px;
`

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: ${({ count }) => (count === 1 ? '1fr' : 'repeat(2, 1fr)')};
  gap: 1rem;

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }

  figure {
    border: 1px solid ${theme.colors.border};
    border-radius: 10px;
    overflow: hidden;

    img {
      width: 100%;
      display: block;
    }

    figcaption {
      font-size: 0.8rem;
      color: ${theme.colors.textMuted};
      padding: 0.6rem 1rem;
      background: ${theme.colors.cardBg};
      border-top: 1px solid ${theme.colors.border};
    }
  }
`

const Nav = styled.div`
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid ${theme.colors.border};
`
